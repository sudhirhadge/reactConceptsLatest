// app/SubmitButton.jsx
"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-blue-500 text-white p-2 rounded"
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}