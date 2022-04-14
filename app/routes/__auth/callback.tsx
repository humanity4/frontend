import type { LoaderFunction } from '@remix-run/node';
import { auth } from '~/utils/auth.server';
import { redirectToCookie } from '~/utils/cookies.server';

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');

  const cookie = (await redirectToCookie.parse(cookieHeader)) || {};

  return auth.authenticate('auth0', request, {
    successRedirect: cookie.redirectTo || '/',
    failureRedirect: '/',
  });
};
