// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  mensaje: String
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ mensaje: req.query.name ?  `Hello ${req.query.name} this is next.js with react :) on this example app on Tejuino.io org.` : 'You didn\'t send your name on querystring :(' });
}
