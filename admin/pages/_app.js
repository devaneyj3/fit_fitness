import "../styles/globals.css";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
	return (
		<Authenticator
			variation="modal"
			signUpAttributes={["username", "email", "phone_number", "name"]}>
			<Component {...pageProps} />
		</Authenticator>
	);
}

export default MyApp;
