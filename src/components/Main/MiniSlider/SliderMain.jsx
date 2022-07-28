import styled, { css } from "styled-components";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

import React, { useRef, useEffect, useState } from "react";

const SliderArea = styled.div`
    position: relative;
    display: block;
    /* overflow: hidden; */
    width: 100%;
    height: 480px;
`;

const Slider = styled.div`
    /* overflow: hidden; */
`;

const SliderLists = styled.ul`
    position: relative;
    display: flex;
    list-style: none;
    padding: 0px;
    background-color: tomato;
    height: 480px;
`;

export default function SliderMain({ data }) {
    return (
        <SliderArea>
            <Slider className="slider">
                <SliderButton direction={true} />
                <SliderButton direction={false} />
                <SliderLists className="slider-list">
                    {data.map((item, idx) => (
                        <SliderItem
                            key={"mini-slider" + idx}
                            item={item}
                        ></SliderItem>
                    ))}
                </SliderLists>
            </Slider>
        </SliderArea>
    );
}
