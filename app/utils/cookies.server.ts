import { createCookie } from '@remix-run/node';

import { SECRETS } from '../constants/index.server';
import { Urls } from './auth.server';

export const redirectToCookie = (request: Request) => {
  const { DOMAIN } = Urls(request);

  return createCookie('redirect-to', {
    domain: DOMAIN,
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [SECRETS],
    secure: process.env.NODE_ENV === 'production',
  });
};
