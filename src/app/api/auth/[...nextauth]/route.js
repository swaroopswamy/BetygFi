import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { GET_LOCAL_SERVER_HOST } from "@util/utility";

export const authOptions = async () => {
    const getAppConfig = async () => {
        try {
            const res = await fetch(`${GET_LOCAL_SERVER_HOST()}/api/config`, { cache: 'no-store' });
            const data = await res.json();
            return data?.data?.config?.values;
        } catch (err) {
            return false;
        }
    };

    const appConfig = async () => await getAppConfig();

    const authConfig = async () => {
        return ({
            providers: [
                GoogleProvider({
                    clientId: (await appConfig()).GOOGLE_CLIENT_ID ?? "",
                    clientSecret: (await appConfig()).GOOGLE_CLIENT_SECRET ?? "",
                    authorization: {
                        params: {
                            prompt: "consent",
                            access_type: "offline",
                            response_type: "code"
                        },
                    },
                    scope: ['openid', 'profile', 'offline_access'],
                }),
                CredentialsProvider({
                    id: "credentials",
                    name: "credentials",
                    async authorize(credentials) {
                        if (credentials) return credentials;
                        else return null;
                    }
                })
                // Add other providers as needed
            ],

            callbacks: {
                jwt({ token, account }) {
                    // Persist the OAuth access_token to the token right after signin
                    if (account) {
                        token.id_token = account.id_token;
                        token.provider = account.provider;
                    }

                    return token;
                },
                session({ session, token }) {
                    // Send properties to the client, like an access_token from a provider.
                    session.id_token = token.id_token;
                    session.provider = token.provider;
                    return session;
                },
            },

            secret: (await appConfig()).NEXTAUTH_SECRET,

        });
    };
    return (await authConfig());
};

export const handler = NextAuth(await authOptions());
export { handler as GET, handler as POST };
