import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(tokenObject) {
    try {
        // Get a new set of tokens with a refreshToken
        const tokenResponse = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/v1/auth/refresh-tokens', {
            refreshToken: tokenObject.refreshToken
        });

        return {
            ...tokenObject,
            accessToken: tokenResponse.data.access.token,
            accessTokenExpiry: tokenResponse.data.access.token.expiry,
            refreshToken: tokenResponse.data.refresh.token
        }
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        }
    }
}

const providers = [
    CredentialsProvider({
        name: 'Credentials',
        authorize: async (credentials) => {
            try {
                // Authenticate user with credentials
                const user = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/v1/auth/login', {
                    password: credentials.password,
                    email: credentials.email
                });

                if (user.data.tokens) {
                    return user.data;
                }

                return null;
            } catch (e) {
                throw new Error(e);
            }
        }
    })
]

const callbacks = {
    jwt: async ({ token, user }) => {
        if (user) {
            // This will only be executed at login. Each next invocation will skip this part.
            token.accessToken = user.tokens.access.token;
            token.accessTokenExpiry = user.tokens.access.token.expiry;
            token.refreshToken = user.tokens.refresh.token;
            token.user = user.user;
        }

        // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
        const shouldRefreshTime = Math.round((token.accessTokenExpiry - 250 * 1000) - Date.now());

        // If the token is still valid, just return it.
        if (shouldRefreshTime > 0) {
            console.log(shouldRefreshTime);
            return Promise.resolve(token);
        }

        // If the call arrives after 23 hours have passed, we allow to refresh the token.
        token = refreshAccessToken(token);
        return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
        // Here we pass accessToken to the client to be used in authentication with your API
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.error = token.error;
        session.user = token.user;
        return Promise.resolve(session);
    },
}
const events= {
    async signOut(message) { console.log('signing out'+message); },
    async signIn(message) { console.log('signing in'+message); },
}
export const options = {
    providers,
    callbacks,
    events,
    pages: {
        signIn: '/login',
        error: '/404',
    },
    secret: '5SyoLzx4K/bqzK8V9VDv3JGnfxoQl8odmsd9H3L491g='
}

const Auth = (req, res) => NextAuth(req, res, options)
export default Auth;