// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";
import { pusherServerConfig } from "../../pusher.config";

const pusher = new Pusher(pusherServerConfig);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // get body
  const body = req.query;
  const socket_id = body.socket_id;
  const channel_name = body.channel_name;

  if (!req.cookies.userId || !req.cookies.nickName) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  console.log("pusher-auth-payload", { socket_id, channel_name });

  const authResponse = pusher.authorizeChannel(
    socket_id as string,
    channel_name as string,
    {
      user_id: req.cookies.userId,
      user_info: {
        nickName: req.cookies.nickName,
      },
    }
  );

  res.status(200).json(authResponse);
}
