import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = () => {
    return {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID_BETYG_FI ?? "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
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

        secret: process.env.NEXTAUTH_SECRET
    };
};

export const handler = NextAuth(authOptions());
export { handler as GET, handler as POST };
