import { NextApiRequest, NextApiResponse } from "next";

type PaystackRequestBody = {
  email: string;
  amount: number;
  reference: string;
  metadata: Record<string, unknown>;
};

type PaystackResponseBody = {
  authorization_url: string;
  access_code: string;
  reference: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaystackResponseBody | { error: string }>
) {
  try {
    const requestBody: PaystackRequestBody = req.body;

    // TODO: Validate request body fields here

    // TODO: Set up Paystack API credentials and endpoint URL
    const paystackApiKey = "<NEXT_PUBLIC_SECRET_KEY>";
    const paystackEndpoint = "https://api.paystack.co/transaction/initialize";

    const response = await fetch(paystackEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Paystack API error: ${response.status}`);
    }

    const responseBody: PaystackResponseBody = await response.json();
    res.status(200).json(responseBody);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
