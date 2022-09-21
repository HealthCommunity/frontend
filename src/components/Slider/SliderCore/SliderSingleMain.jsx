// react hook , react
import React, { useRef, useEffect, useState } from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled, { css } from "styled-components";

// Components
import SliderSingleItem from "./SliderSingleItem";
import SliderButton from "./SliderButton";

// Icons , Images

// Share , Utils

export default function SliderSingleMain({ data, categories }) {
  const [width, setWidth] = useState(0);
  const [currentOrder, setCurrentOrder] = useState(0); //현재 슬라이드의 index를 저장(0에서부터 슬라이드 움직이는 개수만큼 +1싹 무한정으로 커짐)

  //왼쪽, 오른쪽 버튼 클릭 이벤트
  const handleSwipe = (direction) => {
    setCurrentOrder((prev) => prev + direction); //인덱스와 왼쪽 오른쪽 방향 조정 direction(양수인 경우 오른쪽, 음수인경우 왼쪽) 이동
  };

  useEffect(() => {
    //브라우저 사이즈에 맞게 너비 갱신 함수
    const handleResize = () => {
      setWidth(ref.current.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize); //브라우저 리사이즈 이벤트 발생시 width 상태값 갱신
    return () => {
      window.removeEventListener("resize", handleResize); //resize 함수 resize 이벤트가 계속 누적 방지
    };
  }, []);

  //idx가 0보다 작은 경우(왼쪽 끝 범위 초과) 0반환
  //idx가 데이터 길이보다 큰 경우(오른쪽 끝 범위 초과), 오른쪽 끝 처리
  //아닌 경우 현제 인덱스 유지
  const isOver = (idx) =>
    idx < 0 ? 0 : idx >= data.length ? data.length - 1 : idx; //0보다 작은 경우

  useEffect(() => {
    // setInterval 삽입하여 2초마다 setCurrentOrder 실행
    const timer = setInterval(() => {
      setCurrentOrder((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentOrder]);

  const ref = useRef();
  const nowIdx = Math.floor(currentOrder % data.length); //현재 인덱스 아이템의 개수로 나머지로 현재 보여줄 컨텐츠 조정

  //현재 보여주는 슬라이드 컨텐츠보다 앞에 있는 아이템
  const startSlides = [3, 2, 1] //보여줘야할 currrentIndex보다 얼마나 멀리 떨어져 있는 지 나타냄
    .map((num) => {
      const nextIdx = nowIdx >= 0 ? nowIdx - num : data.length + nowIdx - num;

      //현재 인덱스가 맨 왼쪽인 경우(0보다 작은 경우) 다음 인덱스는 맨 뒤로 이동
      if (nextIdx < 0) {
        return data.length - Math.abs(nextIdx);
      }
      return nextIdx;
    })
    .map((num) => data[isOver(num)]);

  //현재 보여주는 슬라이드 컨텐츠보다 뒤에 있는 아이템
  const endSlides = [1, 2, 3] //보여줘야할 currrentIndex보다 얼마나 멀리 떨어져 있는 지 나타냄
    .map((num) => {
      const nextIdx = nowIdx >= 0 ? nowIdx + num : data.length + nowIdx + num;

      //현재 인덱스가 맨 오른쪽인 경우(길이보다 큰 경우) 다음 인덱스는 맨 앞으로 이동
      if (nextIdx < data.length) {
        return nextIdx < 0 ? 0 : nextIdx;
      }
      return Math.abs(data.length - nextIdx);
    })
    .map((num) => data[isOver(num)]);

  console.log("currentOrder >", currentOrder);
  console.log("nowIdx >", nowIdx);

  return (
    <SliderArea ref={ref}>
      <Slider className="slider">
        <SliderButton
          direction={true}
          onClick={() => handleSwipe(-1)} //왼쪽 <- 이동
          categories={categories}
        />
        <SliderButton
          direction={false}
          onClick={() => handleSwipe(1)} //오른쪽 -> 이동
          categories={categories}
        />
        <SliderLists
          categories={categories}
          className="slider-list"
          style={{
            transform: `translate3d(${-currentOrder * width}px, 0px, 0px)`,
            transition: "all ease 0.4s",
          }}
        >
          {/* 현재 슬라이드보다 왼쪽에 있는 컨텐츠 */}
          {startSlides.map((item, idx) => (
            <SliderSingleItem
              key={currentOrder - 3 + idx}
              item={item}
              style={{
                width,
                left: (currentOrder - 3 + idx) * width, //슬라이드 순서에서 아이템 개수만큼 떨어져있는 숫자를 빼주고, i만큼
              }}
              categories={categories}
            />
          ))}
          {/* 현재 슬라이트 컨텐츠 */}
          <SliderSingleItem
            key={currentOrder}
            item={data[nowIdx >= 0 ? nowIdx : data.length + nowIdx]}
            style={{
              width,
              left: currentOrder * width,
            }}
            categories={categories}
          />
          {/* 현재 슬라이드보다 오른쪽에 있는 컨텐츠 */}
          {endSlides.map((item, idx) => (
            <SliderSingleItem
              key={currentOrder + idx + 1}
              item={item}
              style={{
                width,
                left: (currentOrder + idx + 1) * width, //현재 인덱스 +
              }}
              categories={categories}
            />
          ))}
        </SliderLists>

        <SliderPagenation>
          <SliderPagenationList>
            {data.map((item, num) => {
              const target = nowIdx >= 0 ? nowIdx : data.length + nowIdx; //음수일 때는, 데이터 랭스에서 더함-> 음순니까 빼기된다.
              return (
                <SliderPageButton
                  key={num}
                  onClick={() => {
                    setCurrentOrder(currentOrder - (target - num));
                  }}
                  className={num === target ? "active" : ""}
                  isActive={num === target}
                />
              );
            })}
          </SliderPagenationList>
        </SliderPagenation>
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
`;

const Slider = styled.div`
  overflow: hidden;
`;

const SliderLists = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  padding: 0px;
  height: 450px;
  height: ${(props) => (props.categories ? "450px" : "225px")};
`;

const SliderPagenation = styled.ul`
  position: absolute;
  top: auto;
  right: auto;
  bottom: 16px;
  left: 0;
  display: block;
  width: 100%;
  white-space: nowrap;
  text-align: center;
`;

const SliderPagenationList = styled.li`
  display: flex;
  justify-content: center;
  vertical-align: top;
`;

const SliderPageButton = styled.button`
  border: 0;
  display: block;
  width: 8px;
  height: 8px;
  color: transparent;
  border-radius: 4px;
  background: #fff;
  font-size: 0;
  opacity: 0.8;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin: 0 0 0 12px;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      width: 36px;
      opacity: 1;
    `};
`;
