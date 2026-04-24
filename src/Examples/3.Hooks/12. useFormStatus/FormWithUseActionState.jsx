import React from 'react'

import SubmitButton from "./SubmitButton";

export default function FormWithUseActionState() {
    //To display the returned data like {success: true, data: formData} from function submitForm, and for pending state you can use the useActionState hook in the nearest parent form tag, and then pass the pending state or returned data to the child component as props. However, with useFormStatus, you can directly access the pending state in the child component without needing to pass it down as props. 
    // This is because useFormStatus automatically checks for the nearest parent form tag and retrieves the pending state from it, allowing you to manage form submission status more efficiently without prop drilling.

    return (
        <form action={submitForm}>
            <input name="name" placeholder="Enter name" />
            {/* The SubmitButton component will automatically receive the pending state from the nearest parent form tag */}
            <SubmitButton /> {/* This button will be disabled and show "Submitting..." when the form is being submitted, and will be enabled with "Submit" text when not submitting. , no need to pass the pending state as props*/}
        </form>
    );
}

async function submitForm(formData) {
    // Simulate form submission delay
    await waitFor(5000);
    return {
        success: true,
        data: formData // this returned data can be accessed using useActionState in the nearest parent form tag, and then pass it down as props to the child component if needed, but with useFormStatus we can directly access the pending state in the child component without needing to pass it down as props.
    };
}

function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

