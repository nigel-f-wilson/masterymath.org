
import { AuthConfig } from "react-use-auth";
import { Auth0 } from "react-use-auth/auth0";
import { useRouter } from "next/router";

import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <AuthConfig
                authProvider={Auth0}
                navigate={(url) => router.push(url)}
                params={{
                    domain: "useauth.auth0.com",
                    clientID: "GjWNFNOHqlino7lQNjBwEywalaYtbIzh",
                    // redirectUri: `${callbackDomain}/auth0_callback`, // default values follow
                    // audience: `https://${callbackDomain}/api/v2/`,
                    // responseType: "token id_token",
                    // scope: "openid profile email"
                }}
            />
            <Component {...pageProps} />
        </>
    );
}