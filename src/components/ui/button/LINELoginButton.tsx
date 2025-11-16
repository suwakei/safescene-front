'use client'
import { RiLineFill } from "react-icons/ri";
import styles from "@/styles/login.module.css";
import { MouseEventHandler } from "react";

export function LINELoginButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
    <button
        className={styles.LINEBtn}
        onClick={onClick}
    >
        <RiLineFill size={20} />
        <span>LINEでログイン</span>
    </button>
    )
}