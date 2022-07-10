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
    //console.log(popular);
    const items = popular;
    const [active, setActive] = useState(0);

    //console.log(items);

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
                navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                }}
                breakpoints={{
                    // 화면의 넓이가 320px 이상일 때 한개만 보여줌
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    // 화면의 넓이가 640px 이상일 때
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                onTransitionEnd={({ activeIndex }) => setActive(activeIndex)}
            >
                {items.map(({ id, title, urlimage }, idx) => (
                    // console.log(title, urlimage)
                    <SwiperSlide key={id}>
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
