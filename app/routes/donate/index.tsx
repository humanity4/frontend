import type { ActionFunction } from '@remix-run/node';
import { getDomainUrl, getStripeSession } from '~/utils/stripe.server';

import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

export const action: ActionFunction = async ({ request }) => {
  const stripeRedirectUrl = await getStripeSession('10.00', getDomainUrl(request));

  return stripeRedirectUrl ? redirect(stripeRedirectUrl) : null;
};

export default function Index() {
  return (
    <Form method="post">
      <button type="submit">Donate</button>
    </Form>
  );
}
