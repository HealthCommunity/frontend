import styled, { css } from "styled-components";
import SliderMain from "../PullSlider/SliderMain";
import youtubeData from "./youtubeData";
import healthData from "./healthData";
import commercialData from "./commercialData";

const PointColor = {
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

const CategoryText = {
  exercisepost: "다른 사람들의 3대 능력을 확인해보세요",
  threepowerpost: "다른 사람들의 운동 루틴을 확인해보세요",
  freepost: "다른 사람들과 자유롭게ㅤ이야기를 나눠보세요",
};

export default function AdverSlider({ category }) {
  const backgroundStyle = PointColor[category];
  const backgroundText = CategoryText[category];

  return (
    <AdverBackground>
      <SliderBackMain backgroundStyle={backgroundStyle}>
        <SliderText>{backgroundText}</SliderText>
        <SliderContent>
          <SliderMain data={youtubeData.data} categories={category} />
        </SliderContent>
      </SliderBackMain>
    </AdverBackground>
  );
}

const AdverBackground = styled.div`
  width: 1440px;
  height: 266px;
  padding: 22px 12px;
`;

const SliderBackMain = styled.div`
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

const SliderText = styled.span`
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
