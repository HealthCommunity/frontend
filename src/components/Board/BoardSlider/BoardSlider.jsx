
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const BannerDiv = styled.div`
    width:500px;
    height:100px;
    border-radius: ${(props)=>props.theme.radiusSize16};
    padding:10px;
    display: flex;
    background-color: ${(props)=>props.theme.colorPointBlue200};
    box-shadow: ${(props)=>props.theme.shadowColor2};
    @media all and (min-width:480px) and (max-width:767px) {
        width:700px;
    } 
    @media all and (max-width:479px) {
        width:700px;
    }
`

const BannerLeft = styled.div`
    width: 40%;
    display: flex;
    font-size:${(props)=>props.theme.fontSizeH3};
    font-weight: 600;
    justify-content: center;
    align-items: center;
    :hover{
        transform: scale(1.1);
        transition-duration: 1s;
    }
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:${(props)=>props.theme.fontSizeH4};
        margin-right: 10px;
    } 
    @media all and (max-width:479px) {
        font-size:${(props)=>props.theme.fontSizeH4};
        margin-right: 10px;
    }
    
`

const BannerRight= styled.div`
    width:60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const BannerRightItemTitle= styled.div`
    font-size:${(props)=>props.theme.fontSizeH4};
    font-weight: 500;
    margin-bottom: 10px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:${(props)=>props.theme.fontSizeH6};
        
    } 
    @media all and (max-width:479px) {
        font-size:${(props)=>props.theme.fontSizeH6};
    }
`

const BannerRightItem =styled.div`
    font-size:${(props)=>props.theme.fontSizeH6};
    line-height: 1.5em;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:${(props)=>props.theme.fontSizeH7};
        
    } 
    @media all and (max-width:479px) {
        font-size:${(props)=>props.theme.fontSizeH7};
    }
`

function BoardSlider ( ){
    return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        style={{  width: "70%",height: "200px" , paddingTop:"100px", textAlign:"center" , fontSize:"20px"}}
      >
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BannerDiv>
                    <BannerLeft>
                        <a href={"http://speedandpower.co.kr/"} target="_blank" rel="noreferrer">삽짐</a>
                    </BannerLeft>
                <BannerRight>
                    <BannerRightItemTitle>운동 정보</BannerRightItemTitle>
                    <BannerRightItem>
                        크로스핏이나 파워트레이닝 운동정보 찾는 곳
                    </BannerRightItem>
                </BannerRight>
            </BannerDiv>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BannerDiv>
                <BannerLeft>
                    <a href={"https://www.ggjil.com/schedule.php"} target="_blank">
                    개근질닷컴</a></BannerLeft>
                <BannerRight>
                    <BannerRightItemTitle>보디빌링 관련 사이트</BannerRightItemTitle>
                    <BannerRightItem>대회일정 , 운동 정보에 대해 확인해 볼 수 있다</BannerRightItem>
                </BannerRight>
            </BannerDiv>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BannerDiv>
                <BannerLeft>
                    <a href= {"https://www.bodybuilding.com/"} target="_blank" rel="noreferrer">
                    보디빌링 닷컴</a></BannerLeft>
                <BannerRight>
                    <BannerRightItemTitle>웨이트 트레이닝 관련 정보 사이트</BannerRightItemTitle>
                    <BannerRightItem>각 카테고리마다 상품, 운동정보를 확인해 볼 수 있습니다</BannerRightItem>
                </BannerRight>
            </BannerDiv>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BannerDiv>
                <BannerLeft>
                    <a href = {"https://glycemicindex.com/"} target="_blank" rel="noreferrer">
                    글리세믹 인덱스</a></BannerLeft>
                <BannerRight>
                    <BannerRightItemTitle>식품 정보</BannerRightItemTitle>
                    <BannerRightItem>식품 품종, 상태, 조리법에 대한 정보가 있습니다</BannerRightItem>
                </BannerRight>
            </BannerDiv>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BannerDiv>
                <BannerLeft>
                    <a href={"http://koreanfood.rda.go.kr/kfi/fct/fctFoodComp/list"} target="_blank" rel="noreferrer"> 농촌진흥청</a></BannerLeft>
                <BannerRight>
                    <BannerRightItemTitle>식품 영양 정보</BannerRightItemTitle>
                    <BannerRightItem>열량, 단백질, 탄수화물, 지방 등 성분을 찾아볼 수 있습니다</BannerRightItem>
                </BannerRight>
            </BannerDiv>
        </SwiperSlide>
      </Swiper>
    </>
    )
}

export default BoardSlider;