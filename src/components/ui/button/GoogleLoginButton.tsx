'use client'
import { FcGoogle } from "react-icons/fc";
import styles from "@/styles/login.module.css";
import { MouseEventHandler } from "react";

export function GoogleLoginButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
    <button
        className={styles.googleBtn}
        onClick={onClick}
    >
        <FcGoogle size={20} />
        <span>Googleでログイン</span>
    </button>
    )
}