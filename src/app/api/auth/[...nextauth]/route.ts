import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { environments } from "@/envs";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: environments.credencials.google.clientId as string,
      clientSecret: environments.credencials.google.clientSecret as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn ({ user, account }) {
        if (account?.provider === 'google') {
            try {
                const backendUrl = `${environments.origin.backend}/auth/google`;
                const { data: backendUser } = await axios.post(backendUrl, {
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    accessToken: account.access_token
                });
                
                // バックエンドから受け取ったユーザー情報を `user` オブジェクトに格納する
                // この情報は後続の `jwt` コールバックに渡される
                user.id = backendUser.id; // バックエンドで発行されたユーザーID
                return true; // ログイン許可
            } catch (error) {
                console.log("Backend sign-in error: ", error)
                return false; // ログイン拒否
            }
        }
        return false;
    },
    /**
     * JWTが作成・更新されるたびに呼び出される。
     * `signIn`で取得したバックエンドのユーザーIDをトークンに含める。
     */
    async jwt ({ token, user }) {
        if (user) {
            token.id = user.id;
        }
        return token;
    },
    async session({ session, token }) {
        session.user.id = token.id as string;
        return session;
    }
  },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

