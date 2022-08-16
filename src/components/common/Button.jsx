import styled, { css } from "styled-components";

const SIZES = {
    sm: css`
        --button-width-size: auto;
        --button-padding: 12px 16px;
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
        --button-color: #888888;
        --button-bg-color: #ffffff;
        --button-hover-bg-color: none;
        --button-border-color: #cccccc;
    `,
};

function Button({ size, variant, children }) {
    const sizeStyle = SIZES[size];
    const variantStyle = VARIANTS[variant];

    return (
        <StyledButton sizeStyle={sizeStyle} variantStyle={variantStyle}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    ${(p) => p.sizeStyle}
    ${(p) => p.variantStyle}

    width: var(--button-width-size, auto);
    margin: 0;
    border-radius: 60px;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 16px 28px);
    color: var(--button-color, #ffffff);
    background: var(--button-bg-color, #0066ff);
    border: 1px solid var(--button-border-color, none);

    &:active,
    &:hover,
    &:focus {
        background: var(--button-hover-bg-color, #025ce2);
    }
`;

export default Button;
