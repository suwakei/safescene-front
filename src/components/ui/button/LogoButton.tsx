import Image from 'next/image';
import Link from 'next/link';

/**
 * ロゴボタンコンポーネント
 * クリックするとトップページに遷移。
 */
const LogoButton = () => {
  return (
    <Link href="/">
      <Image
        src="/safe_scene_logo.svg"
        alt="SafeScene Logo"
        width={100}
        height={70}
        priority
      />
    </Link>
  );
};

export default LogoButton;
