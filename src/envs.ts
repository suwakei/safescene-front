import { channel } from "diagnostics_channel";

export const environments = {
  origin: {
    frontend:
      process.env.NEXT_PUBLIC_FRONTEND_ORIGIN || 'http://localhost:3000',
    backend:
      process.env.NEXT_PUBLIC_BACKEND_ORIGIN || 'http://localhost:3001/api',
  },
  endpoint: {
    graphql: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '',
  },
  credencials: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
    },
    line: {
      channelId: process.env.NEXT_PUBLIC_LINE_CHANNEL_ID || '',
      channel: process.env.NEXT_PUBLIC_LINE_CHANNEL_SECRET || '',
    },
    x: {
      clientId: process.env.NEXT_PUBLIC_X_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_X_CLIENT_SECRET || '',
    }
  }
};
