import React, { useState } from "react";
import styled from "styled-components";

const InputGroup = styled.div`
    width: 100%;
    margin: 8px 0;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    color: ${(props) => props.theme.fontColor};
    font-size: ${(props) => props.theme.fontSizeH5};
    padding: 0 20px;
    border-radius: ${(props) => props.theme.radiusSize20};
    background-color: ${(props) => props.theme.bgColorSub};
    border: 1px solid #ccc;
    line-height: 45px !important;
    margin-bottom: 2px;

    :active {
        outline: none;
        border: 1px solid ${(props) => props.theme.colorPointBlue200};
    }

    :focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.colorPointBlue200};
    }
`;

const Span = styled.span`
    color: ${(props) =>
        props.isSuccess
            ? props.theme.colorPointOrange100
            : props.theme.colorPointBlue200};
    font-size: ${(props) => props.theme.fontSizeH6};
    margin-left: 16px;
`;

export default function InputDescText({
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
        <InputGroup>
            <Input {...props} value={value} onChange={handleChange} />
            {!!msg && <Span isSuccess={isSuccess}>{msg}</Span>}
        </InputGroup>
    );
}
