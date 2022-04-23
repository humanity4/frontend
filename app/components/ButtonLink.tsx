import classNames from 'classnames';

import { Link, LinkProps } from '@remix-run/react';

export const ButtonLink: React.FC<LinkProps> = ({ className, ...props }) => (
  <Link
    {...props}
    className={classNames(
      'inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      className
    )}
  />
);
