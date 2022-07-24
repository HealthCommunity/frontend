import styled, { css } from "styled-components";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

import React, { useRef, useEffect, useState } from "react";

const SliderArea = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 480px;
`;

const Slider = styled.div`
    overflow: hidden;
`;

const SliderLists = styled.ul`
    position: relative;
    display: flex;
    list-style: none;
    padding: 0px;
    background-color: tomato;
    height: 480px;
`;

const SliderPagenation = styled.ul`
    position: absolute;
    top: auto;
    right: auto;
    bottom: 8px;
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

    ${(props) =>
        props.isActive &&
        css`
            width: 36px;
            opacity: 1;
        `};
`;

export default function SliderMain({ data }) {
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0); //현재 슬라이드의 index를 저장

    const handleSwipe = (direction) => {
        setCurrentIndex((prev) => prev + direction);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(ref.current.clientWidth);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //idx가 0보다 작은 경우
    // - 0이거나, data.length
    // idx임
    const isOver = (idx) =>
        idx < 0 ? 0 : idx >= data.length ? data.length - 1 : idx;

    // const isOver = (idx) => {
    //     if(idx < 0) {
    //         return 0
    //     }
    //     return idx >= data.length ? data.length - 1 : idx;
    // }
    useEffect(() => {
        // setInterval 삽입하여 2초마다 setCurrentIndex 실행
        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex]);

    const ref = useRef();
    const idx = Math.floor(currentIndex % data.length);
    const startSlides = [3, 2, 1] //보여줘야할 currrentIndex보다 얼마나 멀리 떨어져 있는 지 나타냄
        .map((num) => {
            const nextIdx = idx >= 0 ? idx - num : data.length + idx - num;
            //console.log(nextIdx);
            if (nextIdx < 0) {
                return data.length - Math.abs(nextIdx);
            }
            return nextIdx;
        })
        .map((num) => data[isOver(num)]);

    const endSlides = [1, 2, 3]
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
                <SliderButton
                    direction={true}
                    onClick={() => handleSwipe(-1)}
                />
                <SliderButton
                    direction={false}
                    onClick={() => handleSwipe(1)}
                />
                <SliderLists
                    className="slider-list"
                    style={{
                        transform: `translate3d(${
                            -currentIndex * width
                        }px, 0px, 0px)`,
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

                <SliderPagenation>
                    <SliderPagenationList>
                        {data.map((item, num) => {
                            const target = idx >= 0 ? idx : data.length + idx; //음수일 때는, 데이터 랭스에서 더함-> 음순니까 빼기된다.
                            return (
                                <SliderPageButton
                                    key={num}
                                    onClick={() => {
                                        setCurrentIndex(
                                            currentIndex - (target - num)
                                        );
                                    }}
                                    className={num === target ? "active" : ""}
                                    isActive={num === target}
                                ></SliderPageButton>
                            );
                        })}
                    </SliderPagenationList>
                </SliderPagenation>
            </Slider>
        </SliderArea>
    );
}
