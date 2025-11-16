import Link from 'next/link';
import styles from '@/styles/login.module.css';

export function PwdForgetLink() {
  return (
    <Link href="/password-reset" className={styles.pwdForgetLink}>
      パスワードを忘れた場合
    </Link>
  );
}
