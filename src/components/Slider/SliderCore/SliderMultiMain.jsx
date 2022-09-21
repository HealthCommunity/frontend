// react hook , react
import React, { useRef, useState } from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components
import SliderMultiItem from "./SliderMultiItem";
import SliderButton from "./SliderButton";

// Icons , Images

// Share , Utils

export default function SliderSingleMain({ data }) {
  const [currentOrder, setCurrentOrder] = useState(0); //현재 슬라이드의 index를 저장
  const width = 150;
  const makeCount = 8;

  const handleSwipe = (direction) => {
    setCurrentOrder((prev) => prev + direction);
  };

  const isOver = (idx) =>
    idx < 0 ? 0 : idx >= data.length ? data.length - 1 : idx;

  const ref = useRef();
  const nowIdx = Math.floor(currentOrder % data.length);

  const startSlides = [8, 7, 6, 5, 4, 3, 2, 1] //보여줘야할 currrentIndex보다 얼마나 멀리 떨어져 있는 지 나타냄
    .map((num) => {
      const nextIdx = nowIdx >= 0 ? nowIdx - num : data.length + nowIdx - num;
      if (nextIdx < 0) {
        return data.length - Math.abs(nextIdx);
      }
      return nextIdx;
    })
    .map((num) => data[isOver(num)]);

  const endSlides = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((num) => {
      const nextIdx = nowIdx >= 0 ? nowIdx + num : data.length + nowIdx + num;
      if (nextIdx < data.length) {
        return nextIdx < 0 ? 0 : nextIdx;
      }
      return Math.abs(data.length - nextIdx);
    })
    .map((num) => data[isOver(num)]);

  return (
    <SliderArea ref={ref}>
      <Slider className="slider">
        <SliderButton direction={true} onClick={() => handleSwipe(-1)} />
        <SliderButton direction={false} onClick={() => handleSwipe(1)} />
        <SliderLists
          className="slider-list"
          style={{
            transform: `translate3d(${-currentOrder * width}px, 0px, 0px)`,
            transition: "all ease 0.4s",
          }}
        >
          {startSlides.map((item, idx) => (
            <SliderMultiItem
              key={currentOrder - makeCount + idx}
              item={item}
              style={{
                width,
                left: (currentOrder - makeCount + idx) * width,
              }}
            />
          ))}
          <SliderMultiItem
            key={currentOrder}
            item={data[nowIdx >= 0 ? nowIdx : data.length + nowIdx]}
            style={{
              width,
              left: currentOrder * width,
            }}
          />
          {endSlides.map((item, idx) => (
            <SliderMultiItem
              key={currentOrder + idx + 1}
              item={item}
              style={{
                width,
                left: (currentOrder + idx + 1) * width,
              }}
            />
          ))}
        </SliderLists>
      </Slider>
    </SliderArea>
  );
}

const SliderArea = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  height: 150px;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Slider = styled.div`
  overflow: hidden;
`;

const SliderLists = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  padding: 0px;
  height: 200px;
`;
