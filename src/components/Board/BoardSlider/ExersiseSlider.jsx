import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import BoardSliderItem from "./BoardSliderItem";
function ExersiseSlider (){
    return (
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
           <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UCdtRAcd3L_UpV4tMXCw63NQ"} urlimage={"https://yt3.ggpht.com/ytc/AKedOLSmBl8FnhBQ0dgTqV61RMFp-D0NUs6V2mdZstsAlQ=s88-c-k-c0x00ffffff-no-rj"} title={"피지컬 갤러리"} summary={'빡빡이 아저씨가 체형교정, 재활 정보를 알려주는 유튜브 채널'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UCpg89Ys3E4BaLGgEEWVmI9g"} urlimage={"https://yt3.ggpht.com/_HHIPUb7LiGOAZmkvtM3xMHt2KiwGMfcEpx1TD3E3AAWxkMYeS9UNG2wj1IZT0i95Hq5urbtaA=s88-c-k-c0x00ffffff-no-rj"} title={"Thankyou BUBU"} summary={'부부의 알콩달콩 트레이닝을 볼 수 있는 유튜브 채널'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UCoe-0EVDJnjlSoPK8ygcGwQ"} urlimage={"https://yt3.ggpht.com/LzBr3K1XPUs1fEwJA1dpcIJNQo7q0gsR3EIwCFFbrH8pZi5AUNYH2iGEE0R5AsMUlR_1J3QnWGE=s88-c-k-c0x00ffffff-no-rj"} title={"GYM JONG KOOK"} summary={'가수 & 예능인 & 헬스인 재능을 모두 갖춘 김종국의 유튜브 채널'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UCq7bR6RxqqOx8cptc1-0AVQ"} urlimage={"https://yt3.ggpht.com/ytc/AKedOLS099XbB9SK_cgbG9btNZsxCz0h56gSt6Me1NMzfQ=s88-c-k-c0x00ffffff-no-rj"} title={"Allblanc TV"} summary={'운동을 하나의 문화로 만들려고하는 사람들의 유튜브 채널'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UC4yq3FWEWqMvFNFBsV3gbKQ"} urlimage={"https://yt3.ggpht.com/8z6Z_RCxrXi0Nh1-k6MSV2LfhWoOUCaWdXLuGrGhNyc7WOGYBzy7jfy2wS5rSw5hiQZrdMpccQ=s88-c-k-c0x00ffffff-no-rj"} title={"힙으뜸"} summary={'홈트, 운동, 필라테스 카테고리 1위 흠으뜸의 유튜브 채널'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UC3hRpIQ4x5niJDwjajQSVPg"} urlimage={"https://yt3.ggpht.com/ytc/AKedOLTiLp4btbsPFqaFRC-RvO2BRwE5rPvtYxWcCOaw7g=s88-c-k-c0x00ffffff-no-rj"} title={"핏블리 FITVELY"} summary={'전문자격증으로 어려운 코로나를 극복한 괴물 핏블리의 유튜브 채널'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/user/MrRagoona88"} urlimage={"https://yt3.ggpht.com/ytc/AKedOLQdFZmqTrvdbgOgdy017LseCkL9nFSOn6fm28Xsf5g=s88-c-k-c0x00ffffff-no-rj"} title={"말왕TV"} summary={'즐겁게 재밋게 운동하는 고품격 운동방송'}/>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <BoardSliderItem color={"#7FBA7A"} url={"https://www.youtube.com/channel/UC9trbyGOOjJmMea3w6c-e2A"} urlimage={"https://yt3.ggpht.com/ytc/AKedOLQ9c60amVg-VADO0r-JeH-XSjWDx9lJqJsR3QoNKQ=s88-c-k-c0x00ffffff-no-rj"} title={"비타민신지니"} summary={'아는 사람들만 안다는 다이어트 끝판왕 비타민신지니의 유튜브 채널'}/>
        </SwiperSlide>
      </Swiper>
    )
}

export default ExersiseSlider