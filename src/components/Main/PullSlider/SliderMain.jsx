import styled, { css } from "styled-components";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

import React, { useLayoutEffect, useRef, useEffect, useState } from "react";

const SliderArea = styled.div`
    position: relative;
    background-color: tomato;
`;

const Slider = styled.div`
    display: block;
    box-sizing: border-box;
`;

const SliderLists = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    background-color: #f43f5d;
`;

const SliderTrack = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    text-align: left;
`;

export default function SliderMain({ data }) {
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0); //현재 슬라이드의 index를 저장

    const handleSwipe = (direction) => {
        console.log(direction, "클릭");

        if (direction === 1) {
            console.log("오른쪽");
            setCurrentIndex(direction + currentIndex);
        } else {
            console.log("왼쪽");
            setCurrentIndex(direction + currentIndex);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(ref.current.clientWidth - 16);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const ref = useRef();

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
                        style={{
                            transition: `all ease 0.4s`,
                            transform: `translate3d(${
                                -currentIndex * width + 8
                            }px, 0px, 0px)`,
                        }}
                    >
                        {data.map((item, idx) => (
                            <SliderItem
                                key={idx}
                                item={item}
                                width={width - 24}
                            ></SliderItem>
                        ))}
                    </SliderTrack>
                </SliderLists>
            </Slider>
        </SliderArea>
    );
}
