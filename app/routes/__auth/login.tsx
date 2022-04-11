import type { LoaderFunction } from '@remix-run/node';
import { route } from 'routes-gen';
import { auth, getSession } from '~/utils/auth.server';

import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';

type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, { successRedirect: '/private' });
  const session = await getSession(request.headers.get('Cookie'));
  const error = session.get(auth.sessionErrorKey) as LoaderData['error'];
  return json<LoaderData>({ error });
};

export default function Screen() {
  const { error } = useLoaderData<LoaderData>();

  return (
    <Form method="post" action={route('/auth')} className="flex flex-col items-center mt-11">
      {error ? <div>{error.message}</div> : null}
      <button
        type="submit"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Log In
      </button>
    </Form>
  );
}
