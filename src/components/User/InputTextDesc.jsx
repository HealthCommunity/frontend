import React, { useState } from "react";
import styled from "styled-components";

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

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 8px 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme.fontColor};
  padding: 12px 20px;
  background-color: ${(props) => props.theme.bgColorSub};
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  border: 1px solid #eeeeee;
  border-radius: 60px;

  :active {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    outline: none;
    border: 1px solid ${(props) => props.theme.colorPointBlue200};
  }

  :focus {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    outline: none;
    border: 1px solid ${(props) => props.theme.colorPointBlue200};
  }
`;

const Span = styled.span`
  position: absolute;
  right: 20px;
  top: 16px;
  color: ${(props) => (props.isSuccess ? "#0066FF;" : "#DA0808")};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
