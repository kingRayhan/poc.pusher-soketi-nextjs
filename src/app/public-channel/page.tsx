"use client";

import axios from "axios";
import { NextPage } from "next";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";

const PublicChannel: NextPage = () => {
  const { pusher } = useContext(AppContext);

  const [isSubscribedSuccessfully, setIsSubscribedSuccessfully] =
    useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const channel = pusher?.subscribe("demo_public_channel");

    channel?.bind("demo_event", function (data: any) {
      setMessages((prev) => [data, ...prev]);
    });

    channel?.bind("pusher:subscription_succeeded", function (members: any) {
      console.log("Successfully subscribed!");
      setIsSubscribedSuccessfully(true);
    });

    channel?.bind("pusher:pusher:subscription_error", function (error: any) {
      console.log("Error subscribing!");
      console.log(error);
    });
  }, [pusher]);

  const handleSendPublicMesaage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMessage) return;
    axios.post("/api/send-public-message", { message: newMessage }).then(() => {
      setNewMessage("");
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Public Channel</h1>

      {isSubscribedSuccessfully && (
        <div className="px-2 py-2 bg-green-400 rounded-md w-max">
          <p>
            Successfully subscribed to channel <b>demo_public_channel</b>
          </p>
        </div>
      )}

      <form
        action="#"
        className="flex flex-col gap-4 my-10"
        onSubmit={handleSendPublicMesaage}
      >
        <input
          type={"text"}
          className="w-full"
          placeholder="Enter your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </form>

      <div className="flex flex-col gap-4">
        {messages.map((message, i) => (
          <div key={i} className="p-4 bg-gray-100 rounded-sm">
            <pre>{JSON.stringify(message, undefined, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicChannel;
