import type { NextApiRequest, NextApiResponse } from 'next';
import paystack from 'paystack';

type PaystackTransaction = {
  data: {
    reference: string;
  };
};

type PaystackVerifyResponse = {
  status: string;
};

type PaystackError = {
  statusCode?: number;
  message: string;
};

const verify = async (req: NextApiRequest, res: NextApiResponse) => {
  const { reference } = req.body;

  const paystackInstance = paystack(process.env.PAYSTACK_SECRET_KEY);

  try {
    const transaction: PaystackTransaction = await paystackInstance.transaction.verify({ reference });

    if (transaction.data.reference !== reference) {
      throw new Error('Invalid reference');
    }

    if (transaction.data.status === 'success') {
      // Update order status in your database
      res.status(200).send('Payment successful');
    } else {
      res.status(400).send('Payment failed');
    }
  } catch (error: PaystackError | any) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const webhookHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    verify(req, res);
  } else {
    res.status(405).send('Method not allowed');
  }
};

export default webhookHandler;
