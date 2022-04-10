// Example of route that is just an API
// <Form method="post" action="/auth0">...</Form>

import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { auth } from '~/utils/auth.server';

import { redirect } from '@remix-run/node';

export const loader: LoaderFunction = async () => redirect('/');

export const action: ActionFunction = ({ request }) => {
  return auth.authenticate('auth0', request);
};
