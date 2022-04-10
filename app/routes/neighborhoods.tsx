import { ActionFunction, json, MetaFunction, redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'Actions Demo',
});

// When your form sends a POST, the action is called on the server.
// - https://remix.run/api/conventions#action
// - https://remix.run/guides/data-updates
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const answer = formData.get('answer');

  // Typical action workflows start with validating the form data that just came
  // over the network. Clientside validation is fine, but you definitely need it
  // server side.  If there's a problem, return the data and the component can
  // render it.
  if (!answer || typeof answer !== 'string') {
    return json('Come on, at least try!', { status: 400 });
  }

  if (answer !== 'egg') {
    return json(`Sorry, ${answer} is not right.`, { status: 400 });
  }

  // Finally, if the data is valid, you'll typically write to a database or send or
  // email or log the user in, etc. It's recommended to redirect after a
  // successful action, even if it's to the same place so that non-JavaScript workflows
  // from the browser doesn't repost the data if the user clicks back.
  return redirect('/demos/correct');
};

export default function Neighborhoods() {
  // https://remix.run/api/remix#useactiondata
  // const actionMessage = useActionData<string>();

  return (
    <div>
      <Outlet />
    </div>
  );
}
