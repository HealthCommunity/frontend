
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import BoardSliderItem from "./BoardSliderItem";



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
           <BoardSliderItem color={"#3F8CFF"} url={"http://speedandpower.co.kr/"} urlname={"삽짐"} title={"운동 정보"} summary={'크로스핏이나 파워트레이닝 등 운동 정보를 찾는 곳'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#3F8CFF"} url={"https://www.ggjil.com/schedule.php"} urlname={"개근질닷컴"} title={"보디빌딩 관련 사이트"} summary={'보디빌딩 대회일정 , 운동 정보에 대해 확인해 볼 수 있다'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#3F8CFF"} url={"https://www.bodybuilding.com/"} urlname={"보디빌딩 닷컴"} title={"웨이트 트레이닝 관련 정보 사이트"} summary={'각 카테고리마다 상품, 운동정보를 확인해 볼 수 있습니다'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#3F8CFF"} url={"https://glycemicindex.com/"} urlname={"글리세믹 인덱스"} title={"식품정보"} summary={'식품 품종,상태,조리법에 대한 정보가 있습니다'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#3F8CFF"} url={"http://koreanfood.rda.go.kr/kfi/fct/fctFoodComp/list"} urlname={"농촌진흥청"} title={"식품 영양 정보"} summary={'열량, 단백질, 탄수화물, 지방 등 성분을 찾아볼 수 있습니다'}/>
        </SwiperSlide>
      </Swiper>
    </>
    )
}

export default BoardSlider;