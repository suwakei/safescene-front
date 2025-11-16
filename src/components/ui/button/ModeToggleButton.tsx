'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

/**
 * ダークモードとライトモードを切り替えるトグルボタンコンポーネント
 */
export const ModeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // マウントされるまでは何も表示しないか、プレースホルダーを表示。
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      {theme === 'dark' ? (
        <BsFillSunFill size={24} />
      ) : (
        <BsFillMoonFill size={24} />
      )}
    </button>
  );
};
