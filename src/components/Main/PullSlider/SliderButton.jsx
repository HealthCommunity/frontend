import { ReactComponent as ArrowIcon } from "../../../assets/icons/ic_arrow.svg";
import styled, { css } from "styled-components";

const BtnSlideControl = styled.button`
    position: absolute;
    top: calc(50% - 30px);
    padding: 20px 4px;
    z-index: 1;
    background-color: white;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    border: none;

    ${(props) =>
        props.direction
            ? css`
                  transform: rotate(180deg);
                  left: 1rem;
              `
            : css`
                  right: 1rem;
              `};
`;

export default function SliderButton({ direction, onClick }) {
    return (
        <BtnSlideControl onClick={onClick} direction={direction}>
            <ArrowIcon width="16" height="16" fill="#333" />
        </BtnSlideControl>
    );
}
