import { useState } from "react";

function Form() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Hello, ${name}!`);

        setName("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="name">
                Enter your name
            </label>

            <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default Form;