import styled from "styled-components";

export default function SliderSingleItem({ item, style, categories }) {
  const slectSlide = {
    home: <HomeItem item={item} categories={categories} />,
    threepowerpost: <YoutubeItem item={item} />,
    exercisepost: <CommercialItem item={item} />,
    freepost: <CommercialItem item={item} />,
  };

  return (
    <SliderItemInner style={style}>{slectSlide[categories]}</SliderItemInner>
  );
}

function HomeItem({ item }) {
  return (
    <>
      <a href="/">
        <ItemImg src={item} alt="" />
      </a>
    </>
  );
}

function YoutubeItem({ item }) {
  const { link, subscription, text, title, thumbnail } = item;

  return (
    <ItemInnerWrapper>
      <InnerBox>
        <a href={link}>
          <InnderBoxTop>
            <ThumbnailImg src={thumbnail} alt="유튜브 이미지 썸네일" />
            <BoxTopInfo>
              <YoutubeTitle>{title}</YoutubeTitle>
              <YoutubeSubscription>{subscription}</YoutubeSubscription>
            </BoxTopInfo>
          </InnderBoxTop>
          <DescText>{text}</DescText>
        </a>
      </InnerBox>
    </ItemInnerWrapper>
  );
}

function CommercialItem({ item }) {
  const { link, subTitle, text, title } = item;

  return (
    <ItemInnerWrapper>
      <InnerBox>
        <a href={link}>
          <TitleText>{title}</TitleText>
          <SubText>{subTitle}</SubText>
          <DescText>{text}</DescText>
        </a>
      </InnerBox>
    </ItemInnerWrapper>
  );
}

const SliderItemInner = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ItemImg = styled.img`
  display: flex;
  margin: 0 auto;
  height: 450px;
  object-fit: scale-down;
  @media screen and (max-width: 1900px) {
    width: 1500px;
  }
  @media screen and (max-width: 1500px) {
    width: 1000px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
`;

const ItemInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const DescText = styled.div`
  width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const InnderBoxTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BoxTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const InnerBox = styled.div`
  width: 450px;
  padding: 40px 60px;
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const SubText = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 8px;
`;
