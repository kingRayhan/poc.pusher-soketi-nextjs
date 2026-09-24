import { Options as PusherClientOptions } from "pusher-js";

export const pusherClientConfig = {
  key: process.env.NEXT_PUBLIC_PUSHER_KEY || "",
  options: {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER || "",
    forceTLS: true,
    channelAuthorization: {
      endpoint: "/api/pusher-auth",
      transport: "ajax",
    },
  } as PusherClientOptions,
};
