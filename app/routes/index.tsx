import classNames from 'classnames';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Auth0Profile } from 'remix-auth-auth0';
import { route } from 'routes-gen';

import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <Link to={route('/projects')}>Donate Now</Link>
      <Link to={route('/projects/new')}>Create Project</Link>
    </div>
  );
}
