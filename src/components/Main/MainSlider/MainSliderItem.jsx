import styled from "styled-components";

const SliderItem = styled.div`
    width: 200px;
    height: 230px;
    border-radius: 20px;

    img {
        width: calc(100% - 28px);
        height: 100%;
        border-radius: 14px;
        margin-top: 220px;
    }

    &.active {
        img {
            width: 400px;
            height: 450px;
            border-radius: 14px 0 0 14px;
            margin-top: 0px;

            @media all and (min-width: 480px) and (max-width: 767px) {
                width: 100px;
                height: 100px;
            }
            @media all and (max-width: 479px) {
                width: 100px;
                height: 100px;
            }
        }
    }
`;

function MainSliderItem({ id, title, urlimage, active = false }) {
    return (
        <></>
        // <SliderItem className={active ? "active" : ""}>
        //     <img alt="" src={`${urlimage}`} />
        // </SliderItem>
    );
}

export default MainSliderItem;
