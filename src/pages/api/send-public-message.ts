import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";
import { pusherServerConfig } from "../../pusher.config";

const pusher = new Pusher(pusherServerConfig);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;

  pusher.trigger("demo_public_channel", "demo_event", {
    message: body.message,
  });

  res.status(200).json({
    message: "Message Sent",
  });
}
