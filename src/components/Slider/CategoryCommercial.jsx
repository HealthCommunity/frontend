import styled, { css } from "styled-components";
import SliderSingleMain from "./Slider/SliderSingleMain";
import youtubeData from "./data/youtubeData";
import healthData from "./data/healthData";
import commercialData from "./data/commercialData";

const pointColor = {
  exercisepost: css`
    --bg-start-color: #60c6ff;
    --bg-end-color: #1dc895;
  `,

  freepost: css`
    --bg-start-color: #60c6ff;
    --bg-end-color: #7affbf;
  `,

  threepowerpost: css`
    --bg-start-color: #00d1ff;
    --bg-end-color: #0066ff;
  `,
};

const categoryText = {
  exercisepost: "다른 사람들의 3대 능력을 확인해보세요",
  threepowerpost: "다른 사람들의 운동 루틴을 확인해보세요",
  freepost: "다른 사람들과 자유롭게ㅤ이야기를 나눠보세요",
};

const categoryData = {
  exercisepost: healthData.data,
  threepowerpost: youtubeData.data,
  freepost: commercialData.data,
};

export default function CategoryCommercial({ category }) {
  const backgroundStyle = pointColor[category];
  const backgroundText = categoryText[category];

  return (
    <CategoryCommercialWapper>
      <CategoryCommercialBg backgroundStyle={backgroundStyle}>
        <SliderBgText>{backgroundText}</SliderBgText>
        <SliderContent>
          <SliderSingleMain
            data={categoryData[category]}
            categories={category}
          />
        </SliderContent>
      </CategoryCommercialBg>
    </CategoryCommercialWapper>
  );
}

const CategoryCommercialWapper = styled.div`
  width: 1440px;
  height: 266px;
  padding: 22px 12px;
`;

const CategoryCommercialBg = styled.div`
  ${(p) => p.backgroundStyle}

  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    var(--bg-start-color),
    var(--bg-end-color)
  );
  border-radius: 8px;
`;

const SliderBgText = styled.span`
  position: absolute;
  width: 370px;
  height: 88px;
  left: 36px;
  top: 138px;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`;

const SliderContent = styled.div`
  position: absolute;
  top: 20px;
  right: 54px;
  width: 530px;
  height: 226px;
  border-radius: 8px;
`;
