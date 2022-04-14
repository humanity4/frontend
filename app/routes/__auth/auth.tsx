import type { LoaderFunction } from '@remix-run/node';
import { Auth } from '~/utils/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  return Auth(request).authenticate('auth0', request);
};
