
import React, { useRef, useState } from "react";

export default function WithoutUseActionState() {
    const inputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        if (inputRef.current == null) return;

        const result = await saveUser(inputRef.current.value);
        setData(result);

        setIsLoading(false);
    }

    return (
        <form
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
            onSubmit={handleSubmit}
        >
            <label htmlFor="firstName">First Name</label>

            <input
                ref={inputRef}
                id="firstName"
                name="firstName"
                type="text"
            />

            <button
                disabled={isLoading}
                style={{ marginTop: "1rem" }}
            >
                Submit
            </button>

            {data?.error && (
                <span style={{ color: "red" }}>
                    {data.error}
                </span>
            )}

            {data?.message && (
                <span style={{ color: "green" }}>
                    {data.message}
                </span>
            )}
        </form>
    );
}

async function saveUser(inputText) {
    // do fetch request and so save the user in db
    await wait(1000)
    if (inputText === "") {
        return { error: "Name is Required" }
    }
    return { message: "User Saved" }
}

/*
async function wait(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, time)
    })

} */
async function wait(time) {
    return new Promise(res => {
        setTimeout(res, time)
    })
}
