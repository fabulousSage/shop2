import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type CheckoutRequestBody = {
  email: string;
  amount: number;
};

export default async function checkoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, amount }: CheckoutRequestBody = req.body;

    try {
      // Make a request to Paystack API to initiate payment
      const response = await axios.post(
        'https://api.paystack.co/transaction/initialize',
        {
          email,
          amount: amount * 100, // Convert amount to kobo (smallest currency unit in Nigeria)
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Return the payment authorization URL to the client
      res.status(200).json({ url: response.data.data.authorization_url });
    } catch (error) {
      console.error(error);

      // Return an error message to the client
      res.status(500).json({ message: 'Failed to process payment' });
    }
  } else {
    // Return an error message if the request method is not POST
    res.status(405).json({ message: 'Method not allowed' });
  }
}
