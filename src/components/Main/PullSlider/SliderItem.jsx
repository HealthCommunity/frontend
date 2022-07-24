import { useEffect, useRef } from "react";
import styled from "styled-components";

const SliderItemInner = styled.li``;

const SliderItemImg = styled.img`
    width: 100vw;
    height: 480px;
`;

export default function SliderItem({ width, item }) {
    // const ref = useRef();
    // useEffect(() => {
    //     console.log({ a: ref.current.clientWidth });
    // });

    return (
        <SliderItemInner style={{ width }}>
            <a href="#/">
                <SliderItemImg src={item} alt=""></SliderItemImg>
            </a>
        </SliderItemInner>
    );
}
