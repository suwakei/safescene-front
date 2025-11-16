import LogoButton from '@/components/ui/button/LogoButton';
import styles from '@/styles/Header.module.css';
import { Searchbar } from '@/components/ui/bar/Searchbar';
import { Kiwi_Maru } from 'next/font/google';

const kiwi_maru = Kiwi_Maru({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * 全ページ共通のヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <LogoButton />
        <span className={`${styles.logoText} ${kiwi_maru.className}`}>
          Safe Scene
        </span>
      </div>
      <div className={styles.searchContainer}>
        <Searchbar />
      </div>
    </header>
  );
};
