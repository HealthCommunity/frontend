import styled from "styled-components";

export default function SliderItem({ item, style, categories }) {
  const slectSlide = {
    home: <HomeItem item={item} categories={categories} />,
    threepowerpost: <YoutubeInfoItem item={item} />,
  };

  return (
    <SliderItemInner style={style}>{slectSlide[categories]}</SliderItemInner>
  );
}

function HomeItem({ item }) {
  return (
    <>
      <a href="/">
        <ItemImg src={item} alt=""></ItemImg>
      </a>
    </>
  );
}

function YoutubeInfoItem({ item }) {
  console.log(item);
  const { link, subscription, text, title, thumbnail } = item;

  return (
    <SlideItemBackground>
      <CardInner>
        <a href={link}>
          <SlideCardTop>
            <ThumbnailImg src={thumbnail} alt="유튜브 이미지 썸네일" />
            <CardTopInfo>
              <YoutubeTitle>{title}</YoutubeTitle>
              <YoutubeSubscription>{subscription}</YoutubeSubscription>
            </CardTopInfo>
          </SlideCardTop>
          <YoutubeText>{text}</YoutubeText>
        </a>
      </CardInner>
    </SlideItemBackground>
  );
}

const SliderItemInner = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ItemImg = styled.img`
  width: 100vw;
  height: 450px;
  object-fit: cover;
`;

const SlideItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

const ThumbnailImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
`;

const YoutubeTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
`;

const YoutubeSubscription = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`;

const YoutubeText = styled.div`
  width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const SlideCardTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CardTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const CardInner = styled.div`
  width: 450px;
  padding: 40px 60px;
`;
