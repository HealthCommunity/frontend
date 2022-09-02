import styled from "styled-components";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

import React, { useRef, useEffect, useState } from "react";

export default function SliderSingleMain({ data }) {
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); //현재 슬라이드의 index를 저장
  const ItemWidth = 340;

  const handleSwipe = (direction) => {
    setCurrentIndex((prev) => prev + direction);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(ItemWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isOver = (idx) =>
    idx < 0 ? 0 : idx >= data.length ? data.length - 1 : idx;

  const ref = useRef();
  const idx = Math.floor(currentIndex % data.length);
  const startSlides = [5, 4, 3, 2, 1] //보여줘야할 currrentIndex보다 얼마나 멀리 떨어져 있는 지 나타냄
    .map((num) => {
      const nextIdx = idx >= 0 ? idx - num : data.length + idx - num;
      if (nextIdx < 0) {
        return data.length - Math.abs(nextIdx);
      }
      return nextIdx;
    })
    .map((num) => data[isOver(num)]);

  const endSlides = [1, 2, 3, 4, 5]
    .map((num) => {
      const nextIdx = idx >= 0 ? idx + num : data.length + idx + num;
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
            transform: `translate3d(${-currentIndex * width}px, 0px, 0px)`,
            transition: "all ease 0.4s",
          }}
        >
          {startSlides.map((item, idx) => (
            <SliderItem
              key={currentIndex - 3 + idx}
              item={item}
              style={{
                width,
                left: (currentIndex - 3 + idx) * width,
              }}
            ></SliderItem>
          ))}
          <SliderItem
            key={currentIndex}
            item={data[idx >= 0 ? idx : data.length + idx]}
            style={{
              width,
              left: currentIndex * width,
            }}
          ></SliderItem>
          {endSlides.map((item, idx) => (
            <SliderItem
              key={currentIndex + idx + 1}
              item={item}
              style={{
                width,
                left: (currentIndex + idx + 1) * width,
              }}
            ></SliderItem>
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
  height: 100%;
  z-index: 1;
  background-color: tomato;
`;

const Slider = styled.div`
  overflow: hidden;
  background-color: #ff9602;
`;

const SliderLists = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  padding: 0px;
  height: 200px;
  background-color: #58ffb4;
`;
