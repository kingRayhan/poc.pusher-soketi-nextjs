import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";
import { pusherServerConfig } from "../../pusher.server.config";

const pusher = new Pusher(pusherServerConfig);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;

  pusher
    .trigger("private-demo_channel", "demo_event", {
      message: body.message,
    })
    .then(() => {
      res.status(200).json({
        message: "Private message sent",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
}
