import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/lib/axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await api.post("/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });

          console.log("Login API response:", response.data);

          const data = response.data;

          // تحقق من أن الاستجابة صحيحة
          if (data && data.status && data.data?.token && data.data?.user) {
            return {
              id: data.data.user.id,
              name: data.data.user.name || data.data.user.fullName || "User",
              email: data.data.user.email,
              accessToken: data.data.token,
            };
          }

          console.error("Authorize failed: invalid response", data);
          return null;
        } catch (error) {
          console.error("Login error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
