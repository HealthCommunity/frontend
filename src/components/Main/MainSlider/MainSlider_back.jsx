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

const Temp = styled.div`
    border-radius: 8px;
    position: relative;
    width: 100%;
    height: 100%;

    & .swiper-slide {
        width: 172px;
    }

    & .swiper-slide.active {
        width: 640px;

        /* @media all and (min-width: 480px) and (max-width: 767px) {
            width: calc(100% - 20px);
        }
        @media all and (max-width: 479px) {
            width: calc(100% - 20px);
        } */
    }
`;

function MainSlider() {
    const items = popular;
    const [active, setActive] = useState(0);

    return (
        <MainSliderDiv>
            <Temp>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 2500,
                        loopedSlides: 1,
                        loop: true,
                    }}
                    centeredSlides={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    style={{
                        width: "90%",
                        height: "100%",
                        backgroundColor: "teal",
                    }}
                    navigation={true} // 네비게이션 적용, < >
                    breakpoints={{
                        // 화면의 넓이가 320px 이상일 때 한개만 보여줌
                        350: {
                            slidesPerView: "auto",
                            spaceBetween: 30,
                        },
                    }}
                    onTransitionEnd={({ activeIndex }) =>
                        setActive(activeIndex)
                    }
                >
                    {items.map(({ id, title, urlimage }, idx) => (
                        <SwiperSlide
                            key={id}
                            style={{
                                height: "450px",
                                backgroundColor: "tomato",
                            }}
                            //className={idx === active ? "active" : ""}
                            className="active"
                        >
                            <MainSliderItem
                                title={title}
                                urlimage={urlimage}
                                active={idx === active}
                            ></MainSliderItem>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Temp>
        </MainSliderDiv>
    );
}

export default MainSlider;
