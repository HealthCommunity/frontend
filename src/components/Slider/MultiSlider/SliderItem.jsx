import styled from "styled-components";

export default function SliderItem({ item, style }) {
  if (!item) {
    return <></>;
  }

  console.log("개별", item);

  return (
    <SliderItemInner style={style}>
      <a href="/">
        <ItemImg src={item.urls[0]} alt=""></ItemImg>
      </a>
    </SliderItemInner>
  );
}

const SliderItemInner = styled.li`
  width: 200px;
  height: 200px;
  position: absolute;
`;

const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
