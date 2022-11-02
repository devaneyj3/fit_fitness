import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Instructor } from "../models";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
	const [dbUser, setDbUser] = useState(null);

	useEffect(() => {
		addAuthUserToDataStore();
	}, []);

	const addAuthUserToDataStore = async () => {
		const instructor = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		});

		const { attributes } = instructor;
		const { sub, email, phone_number, name, preferred_username } = attributes;

		const instructorExists = await DataStore.query(Instructor, (instructor) =>
			instructor.sub("eq", sub)
		);
		if (instructorExists.length < 1) {
			const newInstructor = await DataStore.save(
				new Instructor({
					sub,
					name,
					email,
					phone: phone_number,
					username: preferred_username,
				})
			);
			// console.log("newInstructor AuthContext line 32", newInstructor);
			setDbUser(newInstructor);
		} else {
			setDbUser(instructorExists[0]);
			// console.log("instructorExists AuthContext line 36", instructorExists[0]);
		}
	};

	return (
		<AuthContext.Provider value={{ dbUser }}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
