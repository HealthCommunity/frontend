import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, loop } from "swiper";

import MainSliderItem from "./MainSliderItem";

import { popular } from "../../../FakeD/popular";
import { useState } from "react";

const MainSliderDiv = styled.div`
    overflow: hidden;
    background: linear-gradient(45deg, rgb(81, 204, 226), rgb(51, 105, 231));
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
`;

const BKSlider = styled.div`
    position: relative;
    width: 90vw;
    height: auto;
    padding: 50px 0 100px;

    & .swiper {
        width: 100%;
        height: 200px;
        overflow: visible;

        .swiper-slide {
            width: 300px;
            text-align: center;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px;
            background: white;
            transition: all 0.3s ease;

            &.swiper-slide-active {
                color: #fff;
                background: linear-gradient(
                    45deg,
                    rgb(246, 146, 89),
                    rgb(241, 105, 117)
                );
                transform: scale(1.4);
                z-index: 2;
            }
        }

        .swiper-pagination-bullet {
            top: 0px;
            left: 0px;
        }
    }
`;

function MainSlider() {
    return (
        <MainSliderDiv>
            <BKSlider>
                <Swiper
                    loop
                    loopedSlides={60}
                    spaceBetween={20}
                    slidesPerView={1}
                    slideToClickedSlide={true}
                    autoplay={{
                        delay: 2500,
                        loopedSlides: 1,
                        loop: true,
                    }}
                    centeredSlides={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    resizeObserver={true}
                    style={{}}
                    navigation={true} // 네비게이션 적용, < >
                    breakpoints={{
                        // 화면의 넓이가 320px 이상일 때 한개만 보여줌
                        // 먼저 모바일부터 고려해서 1이고, 350보다 큰 경우 auto
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        700: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                    <SwiperSlide>Slide 10</SwiperSlide>
                </Swiper>
            </BKSlider>
        </MainSliderDiv>
    );
}

export default MainSlider;
