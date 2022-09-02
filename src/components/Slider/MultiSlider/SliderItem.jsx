import styled from "styled-components";

export default function SliderItem({ item, style }) {
  return (
    <SliderItemInner style={style}>
      <a href="/">
        <ItemImg src={item} alt=""></ItemImg>
      </a>
    </SliderItemInner>
  );
}

const SliderItemInner = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ItemImg = styled.img`
  width: 100vw;
  height: 450px;
  object-fit: cover;
`;
