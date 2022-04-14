import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { AUTH0_CLIENT_ID, AUTH0_LOGOUT_URL } from '~/constants/index.server';
import { destroySession, getSession, Urls } from '~/utils/auth.server';

import { redirect } from '@remix-run/node';

async function doLogout(request: Request) {
  const { AUTH0_RETURN_TO_URL } = Urls(request);
  const session = await getSession(request.headers.get('Cookie'));
  const logoutURL = new URL(AUTH0_LOGOUT_URL);

  logoutURL.searchParams.set('client_id', AUTH0_CLIENT_ID);
  logoutURL.searchParams.set('returnTo', AUTH0_RETURN_TO_URL);

  return redirect(logoutURL.toString(), {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
}

export const action: ActionFunction = async ({ request }) => {
  return doLogout(request);
};

export const loader: LoaderFunction = async ({ request }) => {
  return doLogout(request);
};
