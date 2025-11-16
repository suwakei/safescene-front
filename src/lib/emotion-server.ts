import createEmotionServer from "@emotion/server/create-instance";
import { createEmotionCache } from "./emotion-cache";

export const createEmotionServerInstance = () => {
  const cache = createEmotionCache();
  const server = createEmotionServer(cache);
  return { cache, server };
};
