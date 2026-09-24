import { Options as PusherServerConfig } from "pusher";

export const pusherServerConfig = {
  appId: process.env.PUSHER_APP_ID || "",
  key: process.env.PUSHER_KEY || "",
  secret: process.env.PUSHER_SECRET || "",
  cluster: process.env.PUSHER_CLUSTER || "",
  useTLS: true,
  auth: {
    headers: {
      "Content-Type": "application/json",
    },
  },
} as PusherServerConfig;
