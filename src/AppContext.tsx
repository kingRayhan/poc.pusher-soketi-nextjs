import Pusher from "pusher-js";
import React, { PropsWithChildren } from "react";
import { pusherClientConfig } from "./pusher.config";

interface AppContextProps {
  pusher: Pusher;
}

export const AppContext = React.createContext<AppContextProps>(null);

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  let pusher: Pusher;

  if (typeof window !== "undefined") {
    pusher = new Pusher(pusherClientConfig.appId, pusherClientConfig.options);
  }

  return (
    <AppContext.Provider value={{ pusher }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
