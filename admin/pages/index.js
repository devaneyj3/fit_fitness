import { useEffect, useState } from "react";

import { Auth } from "aws-amplify";

function Home() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const fetchUser = async () => {
			const userData = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(userData);
			console.log(userData);
		};
		fetchUser();
	}, []);

	return <h1>Hello {user && user.attributes.name}</h1>;
}
export default Home;
