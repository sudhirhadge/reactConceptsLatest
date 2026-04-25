// app/page.jsx
"use client";

import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

const initialState = {
    success: false,
    message: "",
    errors: {},
};

export default function UseFormState() {
    // useFormState is a hook that allows you to manage form state and handle form submissions in a more declarative way. 
    // It takes a function (like submitForm) that will be called when the form is submitted, and it returns an array with the current 
    // state of the form and a function to trigger the form submission. The state will include information about whether the form submission was successful, any messages to display, and any validation errors. The formAction function can be used as the action for the form, and it will automatically handle the submission process, including updating the state based on the result of the submitForm function. 
    // This allows you to easily manage form state and provide feedback to users without needing to manually handle all the state updates and side effects associated with form submissions.
    const [state, formAction] = useFormState(submitForm, initialState);

    return (
        <div>
            <div>
                <h1>React Concept: useFormState</h1>

                <h3>Key Takeaways</h3>
                <ul className="list-disc pl-5">
                    <li>
                        <code>useFormState</code> (from <strong>react-dom</strong>) is used to manage form submission state with Server Actions.
                    </li>
                    <li>
                        It takes a server action and an initial state, and returns:
                        <pre>[state, formAction]</pre>
                    </li>
                    <li>
                        <code>formAction</code> is passed to <code>&lt;form action=&#123;...&#125;&gt;</code> to handle submission.
                    </li>
                    <li>
                        <code>state</code> is whatever your server action returns (e.g., errors, success message).
                    </li>
                    <li>
                        Helps avoid manual <code>useState</code> + API handling for forms.
                    </li>
                </ul>

                <h3>Important Notes</h3>
                <ul className="list-disc pl-5">
                    <li>Works only with forms.</li>
                    <li>Does not enforce success/error structure — you define it in the server action.</li>
                    <li>Often used with <code>useFormStatus</code> for loading state.</li>
                </ul>

                <h3>Recommendation</h3>
                <ul className="list-disc pl-5">
                    <li>
                        Prefer <code>useActionState</code> (from React) for new code.
                    </li>
                    <li>Works for any async action (not just forms).</li>
                    <li>Provides built-in pending/loading state.</li>
                    <li>More flexible and future-friendly.</li>
                </ul>

                <h4>
                    <u>Quick Mental Model:</u>
                </h4>
                <pre>
                    useActionState = useFormState + useFormStatus
                </pre>
            </div>
            <div>
                <form action={formAction} className="flex flex-col gap-3 w-64">

                    <input name="name" placeholder="Name" className="border p-2" />
                    {state.errors?.name && (
                        <p className="text-red-500 text-sm">{state.errors.name}</p>
                    )}

                    <input name="email" placeholder="Email" className="border p-2" />
                    {state.errors?.email && (
                        <p className="text-red-500 text-sm">{state.errors.email}</p>
                    )}

                    <SubmitButton />

                    {state.success && (
                        <p className="text-green-600">{state.message}</p>
                    )}
                </form>
            </div>
        </div>
    );
}



async function submitForm(prevState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");

    const errors = {};

    if (!name || name.trim().length < 3) {
        errors.name = "Name must be at least 3 characters";
    }

    if (!email || !email.includes("@")) {
        errors.email = "Enter a valid email";
    }

    // if validation fails
    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            errors,
        };
    }

    // simulate API/db call
    await new Promise((res) => setTimeout(res, 1500));

    return {
        success: true,
        message: "Form submitted successfully",
        errors: {},
    };
}