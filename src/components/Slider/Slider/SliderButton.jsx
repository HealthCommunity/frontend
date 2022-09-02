import styled, { css } from "styled-components";
import ArrowIcon from "../../../assets/images/board_prev.svg";

export default function SliderButton({ direction, onClick, categories }) {
  return (
    <BtnSlideControl
      onClick={onClick}
      direction={direction ? 1 : 0}
      categories={categories}
    >
      <img src={ArrowIcon} alt="슬라이드버튼"></img>
    </BtnSlideControl>
  );
}

const BtnSlideControl = styled.button`
  position: absolute;
  top: calc(50% - 30px);
  z-index: 1;
  background-color: white;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.direction
      ? css`
          transform: rotate(180deg);
          left: 1rem;
        `
      : css`
          right: 1rem;
        `};

  ${(props) =>
    props.categories === "home"
      ? css`
          padding: 20px 4px;
          height: 60px;
          border-radius: 15px;
        `
      : css`
          padding: 0;
          height: 30px;
          border-radius: 50%;
          top: 50%;
        `};
`;
