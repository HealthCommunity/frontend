import styled from "styled-components";

const SliderItem = styled.div`
    width: 172px;
    height: 225px;
    border-radius: 20px;
    /* display: flex;
    justify-content: center;
    align-items: center; */

    img {
        width: 100%;
        height: 100%;
        border-radius: 14px;
    }

    &.active {
        img {
            width: 200%;
            height: 200%;
            border-radius: 14px 0 0 14px;
        }
    }
`;

function MainSliderItem({ id, title, urlimage, active = false }) {
    return (
        <SliderItem className={active ? "active" : ""}>
            <img alt="" src={`${urlimage}`} />
        </SliderItem>
    );
}

export default MainSliderItem;
