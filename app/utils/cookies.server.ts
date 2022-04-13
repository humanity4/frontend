import { createCookie } from '@remix-run/node';

import { DOMAIN, SECRETS } from '../constants/index.server';

export const authDance = createCookie('auth-dance', {
  domain: DOMAIN,
  sameSite: 'lax',
  path: '/',
  httpOnly: true,
  secrets: [SECRETS],
  secure: process.env.NODE_ENV === 'production',
});
