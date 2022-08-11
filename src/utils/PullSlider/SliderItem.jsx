import { useEffect, useRef } from "react";
import styled from "styled-components";

const SliderItemInner = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0 12px;
    float: left;
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
`;

const SliderItemImg = styled.img`
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
`;

export default function SliderItem({ width, item }) {
    // const ref = useRef();
    // useEffect(() => {
    //     console.log({ a: ref.current.clientWidth });
    // });

    return (
        <SliderItemInner
            style={{ width, display: "flex", justifyContent: "center" }}
        >
            <a href="#/">
                <SliderItemImg src={item} alt=""></SliderItemImg>
            </a>
        </SliderItemInner>
    );
}
