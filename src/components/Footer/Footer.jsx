import {FootDiv,FootBottom} from './FooterStyle'
import ReactCardCarousel from "react-card-carousel";
import FooterItem from './FooterItem';
import FooterItemTitle from './FooterItemTitle';


function Footer() {
    return (
        <FootDiv>
            <FootBottom>
                <ReactCardCarousel autoplay={true}  spread={"wide"}>
                    <FooterItem image={"url('https://avatars.githubusercontent.com/u/86876414?s=120&v=4')"} name={"Park Song Hee"} position={"Front-End Dev"} git={"https://github.com/pasong0511"}/>
                    <FooterItem image={"url('https://avatars.githubusercontent.com/u/58128623?v=4')"} name={"Choi Chang Jun"} position = {"Back-End Dev"} git={"https://github.com/changjun6518"}/>
                    <FooterItem image={"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqRsuxt-PLyLh5fO0NoikjwsL5U5d3cAVzFCTBas5xmkqi35QXrMDSy_VdSfmHXv9Hho&usqp=CAU')"} name={"Park Hun Hee"} position = {"Back-End Dev"} git={"https://github.com/qkrgnsgml"}/>
                    <FooterItem image={"url('https://avatars.githubusercontent.com/u/94469974?v=4')"} name={"Lee Ji Hoon"} position={"Front-End Dev"} git={"https://github.com/jiji-hoon96"}/>
                    <FooterItemTitle image={"url('https://cdn-icons-png.flaticon.com/512/25/25231.png')"} name={"Git Hub"} position={"프로젝트 작업을 살펴보세요"}/>
                    <FooterItemTitle image={"url('https://blog.kakaocdn.net/dn/2CufY/btq8RTsnYaT/3EQm1A8iL54UcCzFkemVJ1/img.png')"} name={"Notion"} position={"프로젝트 과정을 살표보아요"}/>
                    <FooterItemTitle image={"url('https://cdn-icons-png.flaticon.com/512/2307/2307756.png')"} name={"아이콘을 클릭해주세요"} position={"정보를 더 확인할 수 있습니다"}/>
                </ReactCardCarousel>
            </FootBottom>
        </FootDiv>
    )
}

export default Footer;
