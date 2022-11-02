import { useAuthContext } from "../src/context/AuthContext";

function Home() {
	const { dbUser } = useAuthContext();

	console.log(dbUser);

	return <h1>Hello {dbUser && dbUser.name}</h1>;
}
export default Home;
