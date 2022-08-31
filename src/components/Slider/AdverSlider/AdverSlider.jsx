import styled from "styled-components";
import SliderMain from "../PullSlider/SliderMain";

export default function AdverSlider({ data }) {
  return (
    <AdverBackground>
      <SliderBackMain>
        <SliderTest>
          다른 사람들의 3대 능력을
          <br /> 확인해보세요
        </SliderTest>
        {/* <SliderContent>
                    <SliderMain data={data} /> 
                </SliderContent> */}
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
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #60c6ff, #1dc895);
  border-radius: 8px;
`;

const SliderTest = styled.span`
  position: absolute;
  width: 534px;
  height: 88px;
  left: 36px;
  top: 138px;

  /* Tilte2/01_Bold */

  font-family: "Pretendard";
  font-style: normal;
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
  background-color: #ff81df;
`;
