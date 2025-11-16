"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { GoogleLoginButton } from "@/components/ui/button/GoogleLoginButton";
import { XLoginButton } from "@/components/ui/button/XLoginButton";
import { LINELoginButton } from "@/components/ui/button/LINELoginButton";
import { PwdForgetLink } from "@/components/ui/link/PwdForgetLink";
import styles from "@/styles/login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ログイン</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.loginBtn}>ログイン</button>
      </form>

      <PwdForgetLink />

      <div className={styles.divider}>または</div>

      <GoogleLoginButton onClick={() => signIn("google", { callbackUrl: "/" })} />
      <XLoginButton onClick={() => signIn("twitter", { callbackUrl: "/" })} />

    </div>
  );
}
