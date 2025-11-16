"use client";

import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { createEmotionCache } from "@/lib/emotion-cache";

export default function EmotionRoot({ children }: { children: React.ReactNode }) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = cache;

  useServerInsertedHTML(() => {
    const { styles } = extractCriticalToChunks("");
    return (
      <>
        {styles.map((style) => (
          <style
            key={style.key}
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: style.css }}
          />
        ))}
      </>
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
