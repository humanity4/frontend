import { route } from 'routes-gen';

/* This example requires Tailwind CSS v2.0+ */
import { SearchIcon } from '@heroicons/react/solid';
import { Form, Link } from '@remix-run/react';

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 'aasdfsadf',
    name: 'Nam maximus',
    description:
      'Nam maximus euismod tempus. Integer auctor consequat lacus, ut blandit lectus maximus in. Quisque sagittis nisl ornare lectus tristique convallis.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

const ProjectCard: React.FunctionComponent<Project> = ({ name, description, imageUrl }) => {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={imageUrl} alt="" />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dd className="text-gray-500 text-sm">{description}</dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px py-4 flex justify-around items-center divide-x divide-gray-200">
          <Form method="post">
            <button
              type="submit"
              name="action"
              value="donate"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                // TODO:
              }}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Donate
            </button>
          </Form>
        </div>
      </div>
    </li>
  );
};

export default function Index() {
  return (
    <div>
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="flex items-center relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="flex-grow h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                  <Link
                    to={route('/projects/new')}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </div>
  );
}
