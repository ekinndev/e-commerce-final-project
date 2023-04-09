// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const request = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'Metehan Akmeşe' });
};

export default request;
