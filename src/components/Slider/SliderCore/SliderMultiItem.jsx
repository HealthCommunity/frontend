import styled from "styled-components";

export default function SliderMultiItem({ item, style }) {
  if (!item) {
    return <></>;
  }

  return (
    <SliderItemInner style={style}>
      <a href={`/${item.postCategory}/${item.postId}`}>
        <ItemImg src={item.urls[0]} alt=""></ItemImg>
        <ItemText>{item.title.slice(0, 8) + "..."}</ItemText>
      </a>
    </SliderItemInner>
  );
}

const SliderItemInner = styled.li`
  width: 120px;
  height: 100%;
  position: absolute;
`;

const ItemImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
`;

const ItemText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #222222;
`;
