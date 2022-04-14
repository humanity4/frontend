import type { LoaderFunction } from '@remix-run/node';
import { Auth } from '~/utils/auth.server';
import { redirectToCookie } from '~/utils/cookies.server';

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');

  const cookie = (await redirectToCookie(request).parse(cookieHeader)) || {};

  return Auth(request).authenticate('auth0', request, {
    successRedirect: cookie.redirectTo || '/',
    failureRedirect: '/',
  });
};
