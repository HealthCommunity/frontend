// import { ReactComponent as ArrowIcon } from "../../../assets/icons/ic_arrow.svg";
import styled, { css } from "styled-components";
import ArrowIcon from "../../../assets/images/board_prev.svg";

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
        <BtnSlideControl onClick={onClick} direction={direction ? 1 : 0}>
            <img src={ArrowIcon} alt="슬라이드버튼"></img>
        </BtnSlideControl>
    );
}
