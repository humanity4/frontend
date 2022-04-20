import { route } from 'routes-gen';
import { getDomainUrl, getStripeSession } from '~/utils/stripe.server';

import { CashIcon, PlusIcon } from '@heroicons/react/outline';
import { redirect } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';

import type { ActionFunction } from '@remix-run/node';
export const action: ActionFunction = async ({ request }) => {
  const stripeRedirectUrl = await getStripeSession('10.00', getDomainUrl(request));

  return stripeRedirectUrl ? redirect(stripeRedirectUrl) : null;
};

export default function Index() {
  return (
    <div className="pt-[40vh] text-center">
      <Form method="post" className="inline-block">
        <button
          className="inline-flex items-center px-6 py-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          <CashIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" /> Donate Now
        </button>
      </Form>
      <Link
        className="ml-4 inline-flex items-center px-6 py-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        to={route('/projects/new')}
      >
        <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Create Project
      </Link>
    </div>
  );
}
