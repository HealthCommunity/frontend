import styled from "styled-components";

const SliderItemInner = styled.li``;

const SliderItemImg = styled.img`
    width: 400px;
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
