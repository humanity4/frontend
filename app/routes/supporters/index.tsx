import { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  // TODO: authn check
  return null;
};

export default function Index() {
  return <div>this worked</div>;
}
