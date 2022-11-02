import "../styles/globals.css";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import awsExports from "../src/aws-exports";
import AuthContextProvider from "../src/context/AuthContext";
Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Authenticator
				variation="modal"
				signUpAttributes={[
					"preferred_username",
					"email",
					"phone_number",
					"name",
				]}>
				<Component {...pageProps} />
			</Authenticator>
		</AuthContextProvider>
	);
}

export default MyApp;
