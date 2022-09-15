// styled-components , Style Files
import styled, { css } from "styled-components";

const SIZES = {
  min: css`
    --button-font-size: 14px;
    --button-width-size: auto;
    --button-padding: 12px 16px;
  `,
  sm: css`
    --button-font-size: 14px;
    --button-width-size: auto;
    --button-padding: 12px 32px;
  `,
  lg: css`
    --button-width-size: 100%;
    --button-padding: 16px 28px;
  `,
};

const VARIANTS = {
  blueline: css`
    --button-color: #0066ff;
    --button-bg-color: #ffffff;
    --button-hover-bg-color: none;
    --button-border-color: #0066ff;
  `,
  grayline: css`
    --button-color: #222222;
    --button-bg-color: #ffffff;
    --button-hover-bg-color: none;
    --button-border-color: #cccccc;
  `,
};

const MARGIN = {
  no: css`
    --button-margin: 0px;
  `,
  basic: css`
    --button-margin: 8px;
  `,
};

export default function Button({ size, variant, space, children, onClick }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  const marginStyle = MARGIN[space];

  return (
    <StyledButton
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      marginStyle={marginStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  ${(p) => p.marginStyle}

  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--button-width-size, auto);
  margin: 0;
  border-radius: 60px;
  text-align: center;
  font-family: "Pretendard";
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 16px 28px);
  margin: var(--button-margin, 0px);
  border: 1px solid var(--button-border-color, none);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0066ff);
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }
`;
