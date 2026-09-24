"use client";

import Pusher from "pusher-js";
import React, { PropsWithChildren } from "react";
import { pusherClientConfig } from "./pusher.client.config";

interface AppContextProps {
  pusher?: Pusher;
}

export const AppContext = React.createContext<AppContextProps>({});

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        pusher: new Pusher(
          pusherClientConfig.key,
          pusherClientConfig.options
        ),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
