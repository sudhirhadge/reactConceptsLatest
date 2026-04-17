import React, { useActionState } from "react";

export default function WithUseActionState() {
    const [data, action, isLoading] = useActionState(saveUser, null);

    /* No need to write below function now
      async function handleSubmit(e) {
          e.preventDefault();
          setIsLoading(true);
  
          if (inputRef.current == null) return;
  
          const result = await saveUser(inputRef.current.value);
          setData(result);
  
          setIsLoading(false);
      } */

    return (
        <form style={{ display: "flex", flexDirection: "column", width: "50%" }} action={action}>
            <label htmlFor="firstName">First Name</label>

            <input id="firstName" name="firstName" type="text" />

            <button disabled={isLoading} style={{ marginTop: "1rem" }}>
                Submit
            </button>

            {data?.error && <span style={{ color: "red" }}>{data.error}</span>}

            {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
        </form>
    );
}

async function saveUser(prev, formData) {
    // do fetch request and so save the user in db
    const inputText = formData.get("firstName");
    console.log(inputText)
    await wait(1000);
    if (inputText === "") {
        return { error: "Name is Required" };
    }
    return { message: "User Saved" };
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
    return new Promise((res) => {
        setTimeout(res, time);
    });
}
