import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * useSession()やgetSession()で返されるセッションの型
   */
  interface Session {
    user: {
      /** バックエンドで管理しているユーザーID */
      id: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /**
   * JWTコールバックで返されるトークンの型
   */
  interface JWT {
    /** バックエンドで管理しているユーザーID */
    id: string;
  }
}
