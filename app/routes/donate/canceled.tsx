import { route } from 'routes-gen';
import { ButtonLink } from '~/components/ButtonLink';

import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function Canceled() {
  return (
    <div className="h-full flex justify-around pt-4 items-center">
      <div className="inline-block">
        <div className="prose mb-16 md:w-[30em] w-[100%] px-4">
          <h2 className="text-center">Canceled.</h2>
          <p className="text-center">Your donation was canceled. Don't worry you won't be charged for anything.</p>
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
