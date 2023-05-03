import { NextApiRequest, NextApiResponse } from 'next';
import { createOrder } from '../../services/orderService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const order = await createOrder(req.body);
      res.status(201).json({ success: true, order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Unable to create order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
