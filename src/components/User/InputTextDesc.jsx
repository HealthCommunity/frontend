// react hook , react
import React, { useState } from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils

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
  margin-bottom: 2px;
  border: 1px solid #eeeeee;
  border-radius: 60px;
  padding: 12px 20px;
  padding-right: 155px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: ${(props) => props.theme.bgColorSub};
  color: ${(props) => props.theme.fontColor};

  @media screen and (max-width: 420px) {
    font-size: 12px;
    padding: 12px 10px;
  }

  :active {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colorPointBlue200};
    color: ${(props) => props.theme.reverseFontColor};

    @media screen and (max-width: 420px) {
      font-size: 12px;
    }
  }

  :focus {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colorPointBlue200};
    color: ${(props) => props.theme.reverseFontColor};

    @media screen and (max-width: 420px) {
      font-size: 12px;
    }
  }
`;

const Span = styled.span`
  position: absolute;
  right: 20px;
  top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => (props.isSuccess ? "#0066FF;" : "#DA0808")};

  @media screen and (max-width: 420px) {
    font-size: 10px;
  }
`;
