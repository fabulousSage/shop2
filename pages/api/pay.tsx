/*
import { NextApiRequest, NextApiResponse } from 'next';
import paystack from 'paystack';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { amount, email } = req.body;

  const paystackInstance = paystack(process.env.PAYSTACK_SECRET_KEY);

  try {
    const transaction = await paystackInstance.transaction.initialize({
      amount: amount * 100,
      email,
    });

    res.json({
      authorization_url: transaction.data.authorization_url,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default handler;
*/


import type { NextApiRequest, NextApiResponse } from 'next';
import paystack from 'paystack';

type PayRequestBody = {
  amount: number;
  email: string;
};

type PaystackTransaction = {
  data: {
    authorization_url: string;
  };
};

type PaystackError = {
  statusCode?: number;
  message: string;
};

const pay = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { amount, email } = req.body as PayRequestBody;

  const paystackInstance = paystack(process.env.PAYSTACK_SECRET_KEY);

  try {
    const transaction: PaystackTransaction = await paystackInstance.transaction.initialize({
      amount: amount * 100,
      email,
    });

    res.json({
      authorization_url: transaction.data.authorization_url,
    });
  } catch (error: PaystackError | any) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default pay;
