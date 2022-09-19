// react hook , react
import { useState, useEffect } from "react";
// recoil ( 상태관리 )

// react library
import ApexCharts from "react-apexcharts";
import axios from "axios";

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images
import BestGoodIcon from "../../../assets/images/main_bset_bl_24.svg";

// Share , Utils

function setChartOption(threeData) {
  const ChartOptions = {
    options: {
      chart: {
        type: "bar",
        stacked: true, //여러개의 값 한줄로 보여줌
        toolbar: {
          show: false, //상단 툴바 조정(필수)
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          startingShape: "rounded",
          endingShape: "rounded",
          barHeight: "20", //바 하나의 너비(필수)
          colors: {
            backgroundBarColors: ["#E6F0FF"],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 9,
          },
        },
      },
      title: {
        text: "ㅤ",
        offsetY: 10,
        offsetX: 10,
        style: {
          fontFamily: "GangwonEduPower",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "26px",
          color: "#222222",
        },
      },
      //하단 삼대력 수치 표
      xaxis: {
        categories: threeData.map((item, rank) => ""), //세로축에 영향줌 필수
        labels: {
          formatter: function (val) {
            return val + "KG";
          },
          style: {
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "20px",
            textAlign: "right",
            color: "#888888",
          },
        },
      },
      //왼쪽 y축
      yaxis: {
        title: {
          text: undefined,
        },
      },
      fill: {
        opacity: 1,
        colors: ["#0066FF", "#7AFFBF", "#00D1FF"],
      },
      legend: {
        //상단 점수 색상별 종류 나열
        position: "top",
        offsetX: -80,
        offsetY: 10,
        fontFamily: "Pretendard",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "20px",
        markers: {
          width: 20,
          height: 10,
          fillColors: ["#0066FF", "#7AFFBF", "#00D1FF"],
        },
      },
      dataLabels: {
        enabled: false, //바 내부에 값 숫자 표기
      },

      grid: {
        yaxis: {
          lines: {
            show: false, //각 차트의 구분을 짖는 세로 실선
          },
        },
        xaxis: {
          lines: {
            show: true, //각 차트의 구분을 짖는 가로 실선
          },
        },
      },
    },
  };

  return ChartOptions.options;
}

export default function HomeChart() {
  const [threeData, setThreeData] = useState([]);

  useEffect(() => {
    axios.get(`/api`).then(({ data }) => {
      setThreeData(data.data.users);
    });
  }, []);

  if (!threeData) {
    return <></>;
  }

  return (
    <HomeChartBox>
      <ApexCharts
        options={setChartOption(threeData)}
        series={[
          {
            name: "데드리프트",
            data: threeData.map((item) => item.bigThreePower.dead),
          },
          {
            name: "벤치프레스",
            data: threeData.map((item) => item.bigThreePower.bench),
          },
          {
            name: "스쿼트",
            data: threeData.map((item) => item.bigThreePower.squat),
          },
        ]}
        width="100%"
        height="100%"
        type="bar"
      />
      <TopTitleGroup>
        <img src={BestGoodIcon} alt="3대력 측정 Top 10"></img>
        <TopTitleText>3대력 top 10</TopTitleText>
      </TopTitleGroup>
      <InnerInfo>
        {threeData.map((item, rank) => (
          <InfoGroup key={rank}>
            <TopRankLabel>{rank + 1}</TopRankLabel>
            <TopNickLabel>
              {item.userNickName.includes("_")
                ? item.userNickName.split("_")[1]
                : item.userNickName}
            </TopNickLabel>
            <TopPowerLabel>{`${item.bigThreePower.dead} / ${item.bigThreePower.bench} / ${item.bigThreePower.squat}`}</TopPowerLabel>
          </InfoGroup>
        ))}
      </InnerInfo>
    </HomeChartBox>
  );
}

const HomeChartBox = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  min-width: 300px;
  margin: 20px auto;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizeH1};
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);

  @media screen and (max-width: 1440px) {
    width: 900px;
  }
  @media screen and (max-width: 1024px) {
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    width: 400px;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
  }
`;

const InnerInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 47px; //숫자가 클수록 바에 붙음, 라벨 위치 조정(차트 높이 변경시 마진으로 텍스트 info 위치 조정)
  left: 37px;
  width: 250px;
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 26.5px 0; //라벨 위치 조정(차트 높이 변경시 마진으로 텍스트 info 위치 조정)
`;

const TopRankLabel = styled.span`
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.theme.reverseFontColor};
  margin-right: 8px;
`;

const TopNickLabel = styled.span`
  margin-right: 8px;
  line-height: 24px;
  font-size: 16px;
  color: ${(props) => props.theme.reverseFontColor};
`;

const TopPowerLabel = styled.span`
  margin-right: 8px;
  line-height: 22px;
  font-size: 14px;
  color: #ff7a00;
`;

const TopTitleGroup = styled.span`
  position: absolute;
  left: 28px;
  top: -4px;
`;
const TopTitleText = styled.span`
  font-family: "GangwonEduPower";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-left: 8px;
  color: ${(props) => props.theme.reverseFontColor};
`;
