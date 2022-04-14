import classNames from 'classnames';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Auth0Profile } from 'remix-auth-auth0';
import { route } from 'routes-gen';

import { CashIcon, PlusIcon } from '@heroicons/react/outline';
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="pt-[40vh] text-center">
      <Link
        className="inline-flex items-center px-6 py-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        to={route('/projects')}
      >
        <CashIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" /> Donate Now
      </Link>
      <Link
        className="ml-4 inline-flex items-center px-6 py-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        to={route('/projects/new')}
      >
        <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Create Project
      </Link>
    </div>
  );
}
