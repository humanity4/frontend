import initStripe from 'stripe';
import { STRIPE_SECRET_KEY } from '~/constants/index.server';

// copied from (https://github.com/kentcdodds/kentcdodds.com/blob/ebb36d82009685e14da3d4b5d0ce4d577ed09c63/app/utils/misc.tsx#L229-L237)
export function getDomainUrl(request: Request) {
  const host = request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');
  if (!host) {
    throw new Error('Could not determine domain URL.');
  }
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
}

export const getStripeSession = async (priceId: string, domainUrl: string): Promise<string | null> => {
  const stripe = new initStripe(STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });
  const lineItems = [
    {
      price_data: {
        unit_amount: 100,
        currency: 'usd',
        product: 'prod_LXXtlluDuMZglY', // Misc key for one-time donation
      },
      quantity: 1,
    },
  ];
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: lineItems,
    success_url: `${domainUrl}/donate/success`,
    cancel_url: `${domainUrl}/donate/cancelled`,
  });
  return session.url;
};
