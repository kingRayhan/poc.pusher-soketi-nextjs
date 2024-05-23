import { Options as PusherClientOptions } from "pusher-js";

// #### React pusher client config
// export const pusherClientConfig = {
//   appId: "06d21999dd24676c7d71",
//   options: {
//     cluster: "ap2",
//     channelAuthorization: {
//       endpoint: "/api/pusher-auth",
//       transport: "ajax",
//     },
//   } satisfies PusherClientOptions,
// };

const SOKETI_HOST = "3.226.47.246";
const SOKETI_PORT = 6001;

// #### Soketi pusher client config
export const pusherClientConfig = {
  appId: "app-key",
  options: {
    wsHost: SOKETI_HOST,
    cluster: "ap2",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    enabledTransports: ["ws", "wss"],
    channelAuthorization: {
      endpoint: "/api/pusher-auth",
      transport: "jsonp",
    },
  } as PusherClientOptions,
};

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
  appId: "app-id",
  key: "app-key",
  secret: "app-secret",
  cluster: "ap2",
  useTLS: false,
};
