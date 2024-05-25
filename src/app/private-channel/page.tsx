"use client";

import { NextPage } from "next";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import axios from "axios";

const PrivateChannel: NextPage = () => {
  const [isSubscribedSuccessfully, setIsSubscribedSuccessfully] =
    useState<boolean>(false);
  const [subscriptionError, setSubscriptionError] = useState<any>(null);

  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const { pusher } = useContext(AppContext);
  useEffect(() => {
    const channel = pusher?.subscribe("private-demo_channel");
    channel?.bind("demo_event", function (data: any) {
      setMessages((prev) => [data, ...prev]);
    });
    channel?.bind("pusher:subscription_succeeded", function (members: any) {
      console.log("Successfully subscribed!");
      console.log("members:", members);
      setIsSubscribedSuccessfully(true);
    });

    channel?.bind("pusher:subscription_error", function (error: any) {
      console.log("Unable to subscribe to channel");
      console.log("pusher:subscription_error", error);
      setSubscriptionError(error);
    });
  }, [pusher]);

  const handleSendPublicMesaage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMessage) return;
    axios
      .post("/api/send-private-message", { message: newMessage })
      .then(() => setNewMessage(""));
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Private Channel</h1>
      {isSubscribedSuccessfully && (
        <div className="px-2 py-2 bg-green-400 rounded-md w-max">
          <p>
            Successfully subscribed to channel <b>private-demo_channel</b>
          </p>
        </div>
      )}
      {subscriptionError && (
        <div className="max-w-3xl px-2 py-2 bg-red-400 rounded-md w-max">
          <p className="mb-2 text-xl">
            Failed to subscribed to channel <b>private-demo_channel</b>
          </p>
          <p className="w-full break-all">{subscriptionError.error}</p>
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

export default PrivateChannel;
