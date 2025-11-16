'use client'
import { FaXTwitter } from "react-icons/fa6";
import styles from "@/styles/login.module.css";
import { MouseEventHandler } from "react";

export function XLoginButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button
        className={styles.xBtn}
        onClick={onClick}
    >
        <FaXTwitter size={18} />
        <span>Xでログイン</span>
    </button>
    )
}