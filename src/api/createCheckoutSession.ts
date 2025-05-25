import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { priceId, mode } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      success_url: `${req.headers.origin}/donate/success`,
      cancel_url: `${req.headers.origin}/donate/cancel`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
