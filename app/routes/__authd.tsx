import classNames from 'classnames';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import Avatar from 'react-avatar';
import { Auth0Profile } from 'remix-auth-auth0';
import { route } from 'routes-gen';
import { Auth } from '~/utils/auth.server';

import { Dialog, Transition } from '@headlessui/react';
import { FolderIcon, HomeIcon, MenuIcon, UsersIcon, XIcon } from '@heroicons/react/outline';
import { json, LoaderFunction, redirect } from '@remix-run/node';
import { Link, Outlet, useLoaderData, useMatches } from '@remix-run/react';

import { redirectToCookie } from '../utils/cookies.server';

type LoaderData = { profile: Auth0Profile };

export const loader: LoaderFunction = async ({ request }) => {
  const profile = await Auth(request).isAuthenticated(request);

  if (!profile) {
    const cookieHeader = request.headers.get('Cookie');
    const cookie = (await redirectToCookie(request).parse(cookieHeader)) || {};
    const redirectTo = new URL(request.url).pathname;
    cookie.redirectTo = redirectTo;

    return redirect('/auth', {
      headers: {
        // Add cookie to redirect to target page
        'Set-Cookie': await redirectToCookie(request).serialize(cookie, {
          expires: new Date(Date.now() + 10000),
        }),
      },
    });
  }

  return json<LoaderData>(
    { profile },
    {
      headers: {
        // Used up the redirect so expire it
        'Set-Cookie': await redirectToCookie(request).serialize('', { expires: new Date(0) }),
      },
    }
  );
};

const navItems = [
  { name: 'Projects', href: route('/projects'), icon: FolderIcon, current: false },
  { name: 'About', href: route('/about'), icon: HomeIcon, current: false },
];

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { profile } = useLoaderData<LoaderData>();

  const { displayName, photos } = profile;

  const photoSrc = photos[0]?.value;

  const avatar = <Avatar className="inline-block h-10 w-10 rounded-full" size="40" name={displayName} src={photoSrc} />;

  const logoutLink = <a href={route('/logout')}>Log out</a>;

  const matchedPaths = useMatches().map(({ pathname }) => pathname);

  const matchedNavigation = navItems.map((navItem) => ({ ...navItem, current: matchedPaths.includes(navItem.href) }));

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Voolik"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {matchedNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <div className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>{avatar}</div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{displayName}</p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{logoutLink}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Voolik"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {matchedNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>{avatar}</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{displayName}</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{logoutLink}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
