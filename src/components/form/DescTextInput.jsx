import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0.75rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    color: #495057;
    background-color: #fff;
    margin: 0 0 4px 0;
`;

function DescTextInput({
    defaultValue = "",
    onChange,
    onValidation,
    ...props
}) {
    const [value, setValue] = useState(defaultValue);
    const [validate, setValidate] = useState([]);
    const [isSuccess, msg] = validate;

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
        if (onValidation) {
            setValidate(onValidation(e.target.value));
        }
    };

    return (
        <>
            <Input {...props} value={value} onChange={handleChange} />
            {!!msg && (
                <span style={{ color: isSuccess ? "tomato" : "blue" }}>
                    {msg}
                </span>
            )}
        </>
    );
}

export default DescTextInput;
