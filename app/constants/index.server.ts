export const DOMAIN =
  process.env.DOMAIN || process.env.VERCEL_ENV === 'production'
    ? 'frontend-humanity4.vercel.app'
    : process.env.VERCEL_URL;

export const AUTH0_RETURN_TO_URL = process.env.AUTH0_RETURN_TO_URL || `https://${DOMAIN}`;
export const AUTH0_CALLBACK_URL = process.env.AUTH0_CALLBACK_URL! || `https://${DOMAIN}/callback`;
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID!;
export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET!;
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!;
export const AUTH0_LOGOUT_URL = process.env.AUTH0_LOGOUT_URL!;
export const SECRETS = process.env.SECRETS!;
