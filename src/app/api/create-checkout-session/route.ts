import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { mode, priceId, amount } = await req.json();
    if (amount) {
      const amountInPence = Math.round(amount * 100);

      const headers = new Headers(req.headers);
      const origin = headers.get('origin') || 'http://localhost:3000';

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: 'Donation',
                description:
                  'Every contribution - big or small, can help provide comfort and spiritual peace to someone in need. Your support matters.',
              },
              unit_amount: amountInPence,
            },
            quantity: 1,
          },
        ],
        mode,
        success_url: `${origin}/donate/success`,
        cancel_url: `${origin}/donate/cancel`,
      });
      return NextResponse.json({ sessionId: session.id });
    }

    const headers = new Headers(req.headers);
    const origin = headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      success_url: `${origin}/donate/success`,
      cancel_url: `${origin}/donate/cancel`,
    });
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create checkout session, error: ${error}` },
      { status: 500 }
    );
  }
}
