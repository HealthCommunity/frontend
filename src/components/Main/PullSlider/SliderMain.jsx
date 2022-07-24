import styled, { css } from "styled-components";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

import React, { useLayoutEffect, useRef, useEffect, useState } from "react";

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
    list-style: none;
    padding: 0px;
    background-color: tomato;
`;

const SliderTrack = styled.div`
    position: relative;
    display: flex;
`;

export default function SliderMain({ data }) {
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(1); //현재 슬라이드의 index를 저장

    const setSlides = () => {
        let addedFront = [];
        let addedLast = [];

        addedLast.push(data[0]); //맨 앞에꺼 맨 뒤에 추가
        addedFront.unshift(data[data.length - 1]); //맨 뒤에꺼 맨 앞으로 추가

        return [...addedFront, ...data, ...addedLast];
    };

    let slides = setSlides();

    const handleSwipe = (direction) => {
        //next 오른쪽 > 이동
        if (direction === 1) {
            setCurrentIndex(direction + currentIndex);
            if (currentIndex > data.length) {
                setCurrentIndex(1);
                slideRef.current.style.transform = "translateX(0)";
            }
        }
        //prev 왼쪽 < 이동
        else {
            setCurrentIndex(direction + currentIndex);
            if (currentIndex <= 0) {
                setCurrentIndex(data.length);
            }
        }
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

    const ref = useRef();
    const slideRef = useRef();

    useEffect(() => {
        console.log({ slideRef });
    });

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
                <SliderLists className="slider-list">
                    <SliderTrack
                        ref={slideRef}
                        style={{
                            transition: `all ease 0.4s`,
                            transform: `translate3d(${
                                -currentIndex * width
                            }px, 0px, 0px)`,
                        }}
                    >
                        {slides.map((item, idx) => (
                            <SliderItem
                                key={idx}
                                item={item}
                                width={width}
                            ></SliderItem>
                        ))}
                    </SliderTrack>
                </SliderLists>
            </Slider>
        </SliderArea>
    );
}
