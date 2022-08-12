import styled from "styled-components";

const SliderItemInner = styled.li`
    position: absolute;
`;

const SliderItemImg = styled.img`
    width: 100vw;
    height: 480px;
`;

export default function SliderItem({ item, style }) {
    return (
        <SliderItemInner style={style}>
            <a href="#/">
                <SliderItemImg src={item} alt=""></SliderItemImg>
            </a>
        </SliderItemInner>
    );
}
