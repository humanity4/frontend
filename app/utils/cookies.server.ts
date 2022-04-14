import { Cookie, createCookie } from '@remix-run/node';

import { SECRETS } from '../constants/index.server';
import { Urls } from './auth.server';

let cookie: Cookie;

export const redirectToCookie = (request: Request) => {
  if (!cookie) {
    const { DOMAIN } = Urls(request);

    cookie = createCookie('redirect-to', {
      domain: DOMAIN,
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
      secrets: [SECRETS],
      secure: process.env.NODE_ENV === 'production',
    });
  }

  return cookie;
};
