/**
 * TODO: auth0 setup/tenant
 * https://www.npmjs.com/package/remix-auth-auth0
 */

import { Authenticator } from 'remix-auth';
import { Auth0Strategy } from 'remix-auth-auth0';
import {
    AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN, SECRETS
} from '~/constants/index.server';

import { createCookieSessionStorage } from '@remix-run/node';

import type { Auth0Profile } from 'remix-auth-auth0';
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_remix_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [SECRETS],
    secure: process.env.NODE_ENV === 'production',
  },
});

export const Urls = (request: Request) => {
  const { protocol, host } = new URL(request.url);

  const AUTH0_RETURN_TO_URL = `${protocol}//${host}`;
  const AUTH0_CALLBACK_URL = `${AUTH0_RETURN_TO_URL}/callback`;

  return {
    DOMAIN: host.split(':')[0],
    AUTH0_RETURN_TO_URL: AUTH0_RETURN_TO_URL,
    AUTH0_CALLBACK_URL: AUTH0_CALLBACK_URL,
  };
};

let auth: Authenticator<Auth0Profile>;

export const Auth = (request: Request) => {
  if (!auth) {
    auth = new Authenticator<Auth0Profile>(sessionStorage);

    const { AUTH0_CALLBACK_URL } = Urls(request);

    const auth0Strategy = new Auth0Strategy(
      {
        callbackURL: AUTH0_CALLBACK_URL,
        clientID: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        domain: AUTH0_DOMAIN,
      },
      async ({ profile }) => {
        // Use the returned information to get a token to interact with the Django API
        return profile;
      }
    );

    auth.use(auth0Strategy);
  }

  return auth;
};

export const { getSession, commitSession, destroySession } = sessionStorage;
