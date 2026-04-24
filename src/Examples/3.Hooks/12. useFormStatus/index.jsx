import React from 'react'
import FormWithUseActionState from './FormWithUseActionState'

function UseFormStatus() {
    return (
        <div>
            <h1>useFormStatus</h1>
            <p>
                <code>useFormStatus</code> is a React hook that provides information about the
                <u style={{ color: "red" }}> status of a form submission. </u>
                It is typically used in conjunction with form handling libraries or custom form implementations (need to check) to track the state of form submissions,
                such as whether the form is currently submitting, if there were any errors, or if the submission was successful.
            </p>
            <ul>
                <li>Tracks the submission status of a form</li>
                <li style={{ backgroundColor: 'pink' }}>Provides information about <u>loading, errors, and success states</u></li>
                <li>Can be used with custom form implementations or form handling libraries - need to check</li>
                <li>This hook check if there is any <code>form</code> element exit in its parent tag ;it automatially take the
                    pending state from the useActionState of the nearest parent form tag, (no need to send prop), it also gives
                    us more control ⇒ data, method ,action : saves us from using context , deeply nested submit button can access the form pending status from nearest parent form tag..</li>
            </ul>
            <div>
                <h2>Example of useFormStatus</h2>
                <p>Here is a simple example of how to use the <code>useFormStatus</code> hook in a React component:</p>
                <pre>
                    <code>
                        {`import React from 'react';
import { useFormStatus } from 'your-form-library';

function MyForm() {
  const { pending } = useFormStatus();

  return (
    <form action="/submit">
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      {pending && <p>Loading...</p>}
    </form>
  );
}`}
                    </code>
                </pre>


            </div>
            <FormWithUseActionState />
        </div>
    )
}

export default UseFormStatus 