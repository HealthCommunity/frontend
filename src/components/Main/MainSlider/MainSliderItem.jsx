import styled from "styled-components";
import { Link } from "react-router-dom";

const SliderItem = styled.div`
    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`;

const SliderItemContent = styled.div`
    position: absolute;
    height: 8%;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 12px 8px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    text-align: center;
    font-weight: 300;
    border-radius: 0 0 8px 8px;
    white-space: nowrap;
    font-size: 0.8rem;
`;

function MainSliderItem({ id, title, urlimage, value }) {
    const islongTitle = title.length >= 10;
    const shortTitle = islongTitle ? title.split(0, 10) + "..." : title;

    return (
        <SliderItem style={{ width: "100%", height: "100%" }}>
            <Link to={`./${value}/${id}`}>
                <img alt="" src={`${urlimage}`} />
                <SliderItemContent>{shortTitle}</SliderItemContent>
            </Link>
        </SliderItem>
    );
}

export default MainSliderItem;
