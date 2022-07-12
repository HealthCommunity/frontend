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
    overflow: hidden;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
`;

const BKSlider = styled.div`
    position: relative;
    width: 90vw;
    height: 90%;
    padding: 50px 0 100px;
    margin: auto;

    & .swiper {
        width: 100%;
        height: 400px;
        overflow: hidden;
        font-size: 10px;

        .swiper-slide {
            color: #fff;
            height: 340px;
            box-sizing: border-box;
            text-align: center;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px;
            transition: all 0.3s ease;
            transform: scale(0.8);
            margin: auto 0;

            &.swiper-slide-active {
                color: #fff;
                transform: scale(1);
                z-index: 2;
            }
        }
    }

    & .swiper-pagination {
        bottom: 0px;
        .swiper-pagination-bullet-active {
            background-color: ${(props) => props.theme.colorPointPupple200};
        }
    }

    & .swiper-button-prev,
    & .swiper-button-next {
        color: ${(props) => props.theme.colorPointPupple200};
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        opacity: 0.8;
    }

    & .swiper-button-prev::after,
    & .swiper-button-next::after {
        font-size: 16px;
    }
`;

function MainSlider() {
    const items = popular;
    const [active, setActive] = useState(0);

    return (
        <MainSliderDiv>
            <BKSlider>
                <Swiper
                    loop
                    loopedSlides={60}
                    spaceBetween={30}
                    slidesPerView={1}
                    slideToClickedSlide={true}
                    autoplay={{
                        delay: 2500,
                        loopedSlides: 1,
                        loop: true,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    resizeObserver={true}
                    navigation={true} // 네비게이션 적용, < >
                    breakpoints={{
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1400: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        2000: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                    }}
                    onTransitionEnd={({ activeIndex }) =>
                        setActive(activeIndex)
                    }
                >
                    {items.map(({ id, title, urlimage }) => (
                        <SwiperSlide key={id}>
                            <MainSliderItem
                                id={id}
                                title={title}
                                urlimage={urlimage}
                                active={active}
                                value={"exersise"}
                            ></MainSliderItem>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </BKSlider>
        </MainSliderDiv>
    );
}

export default MainSlider;
