"use client";

import AppContextProvider from "../AppContext";
import Layout from "../components/Layout";
import "../styles/globals.css";
// export const metadata = {
//   title: "Pusher Playground",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Layout>{children}</Layout>
        </AppContextProvider>
      </body>
    </html>
  );
}
