import { Options as PusherClientOptions } from "pusher-js";
import { Options as PusherServerConfig } from "pusher";

// #### React pusher client config

// const SOKETI_HOST: string = "socket.techdiary.dev";
const SOKETI_HOST: string = "watch.notarylab.dev";
const SOKETI_PORT: number = 443;
const SOKETI_DEFAULT_APP_ID = "notary";
const SOKETI_DEFAULT_APP_KEY = "6zMr9RGT8";
const SOKETI_DEFAULT_APP_SECRET = "E8q6%Yhv4w8Fi2h";

// #### Soketi pusher client config
export const pusherClientConfig = {
  appId: SOKETI_DEFAULT_APP_KEY,
  options: {
    wsHost: SOKETI_HOST,
    wssHost: SOKETI_HOST,
    wssPort: SOKETI_PORT,
    wsPort: SOKETI_PORT,
    cluster: "",
    forceTLS: true,
    disableStats: true,
    enabledTransports: ["wss", "ws"],
    channelAuthorization: {
      endpoint: "/api/pusher-auth",
      transport: "ajax",
    },
  } as PusherClientOptions,
};

// export const pusherClientConfig = {
//   appId: "06d21999dd24676c7d71",
//   options: {
//     cluster: "ap2",
//     channelAuthorization: {
//       endpoint: "/api/pusher-auth",
//       transport: "ajax",
//     },
//   } as PusherClientOptions,
// };

// #### React pusher server config
// export const pusherServerConfig = {
//   appId: "1486630",
//   key: "06d21999dd24676c7d71",
//   secret: "43db56edd06769a7e048",
//   cluster: "ap2",
//   useTLS: true,
// };

// #### Soketi pusher server config
export const pusherServerConfig = {
  host: SOKETI_HOST,
  port: SOKETI_PORT,
  scheme: "https",
  useTLS: true,
  appId: SOKETI_DEFAULT_APP_ID,
  key: SOKETI_DEFAULT_APP_KEY,
  secret: SOKETI_DEFAULT_APP_SECRET,
  cluster: "",
  auth: {
    headers: {
      "Content-Type": "application/json",
    },
  },
} as PusherServerConfig;
