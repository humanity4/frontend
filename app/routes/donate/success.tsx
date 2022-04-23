import { route } from 'routes-gen';
import { ButtonLink } from '~/components/ButtonLink';

import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function Success() {
  return (
    <div className="h-full flex justify-around pt-4 md:items-center">
      <div className="inline-block">
        <div className="prose mb-16 md:w-[30em] w-[100%] px-4">
          <h2 className="text-center">Thank you for you donation!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis commodo ultrices. Donec aliquet
            dignissim tortor nec tempor. Pellentesque mollis condimentum diam, eget consectetur elit condimentum a.
          </p>
        </div>
        <div className="text-center">
          <ButtonLink className="m-auto" to={route('/')}>
            <ArrowLeftIcon className="-ml-1 mr-3 h-5 w-5" />
            Back to home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
