import { useAuthContext } from "../src/context/AuthContext";

function Home() {
	const { dbUser } = useAuthContext();

	return (
		<div>
			<h1>Hello {dbUser && dbUser.name}</h1>
			<h1>admin </h1>
		</div>
	);
}
export default Home;
