import React, { useState } from "react";

function Input({ template, className, onchange, ...props }) {
    const [texto, setTexto] = useState("");

    return (
        <div className="justify-center flex">
            <input
                className="p-2 w-2/4 border border-white rounded-xl"
                value={texto}
                type="text"
                onChange={(e) => setTexto(e.target.value)}>
            </input>
        </div>
    )
};

export default Input;
