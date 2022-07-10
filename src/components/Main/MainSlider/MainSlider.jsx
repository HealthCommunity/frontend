import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import MainSliderItem from "./MainSliderItem";

import { popular } from "../../../FakeD/popular";
import { useState } from "react";

const MainSliderDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizeH1};
    /* background-color: ${(props) => props.theme.navBgColor}; */
`;

function MainSlider() {
    const items = popular;
    const [active, setActive] = useState(0);

    return (
        <MainSliderDiv>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    // disableOnInteraction: false,
                    loopedSlides: 1,
                    loop: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                    width: "90%",
                    height: "100%",
                }}
                onTransitionEnd={({ activeIndex }) => setActive(activeIndex)}
            >
                {items.map(({ title, urlimage }, idx) => (
                    // console.log(title, urlimage)
                    <SwiperSlide>
                        <MainSliderItem
                            title={title}
                            urlimage={urlimage}
                            active={idx === active}
                        ></MainSliderItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </MainSliderDiv>
    );
}

export default MainSlider;
