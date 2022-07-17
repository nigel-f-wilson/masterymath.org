
import { Auth0Provider } from "@auth0/auth0-react";


import { useRouter } from "next/router";

import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <Auth0Provider
          domain="dev-spo5eo4o.us.auth0.com"
          clientId="YeZjOPZTYZEmOj61o8xgDKZoJhAg7dOa"
          // redirectUri={window.location.origin}
          // redirectUri="https://masterymath.org/"
          redirectUri="http://localhost:3000/"
          // redirectUri="https://masterymath.org/dashboard"
        >
            <Component {...pageProps} />
        </Auth0Provider>
    );
}