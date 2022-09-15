// react hook , react

// recoil ( 상태관리 )

// react library
import ApexCharts from "react-apexcharts";

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils

function setChartOption() {
  const ChartOptions = {
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
        },
      ],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "95%",
          },
        },
      },
      labels: ["데드리프트", "벤치프레스", "스쿼트"],
      fill: {
        opacity: 1,
        colors: ["#0066FF", "#7AFFBF", "#00D1FF"],
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val !== 1 ? val + "kg" : val - 1 + "kg";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      stroke: {
        show: false, //차트 border
      },
    },
  };

  return ChartOptions.options;
}

export default function UserPowerChart({ PowerData }) {
  //삼대력 정보가 없는 경우 1로 처리해서 동등한 비율로 그래프 보여주기
  if (PowerData[3] === 0) {
    PowerData[0] = 1;
    PowerData[1] = 1;
    PowerData[2] = 1;
  }

  return (
    <ChartsBox>
      <ApexCharts
        options={setChartOption()}
        series={PowerData.slice(0, 3)}
        type="donut"
        width="300"
        height="300"
      />
      <InnerInfo>
        <InnerTop>
          <p>3대력</p>
          <span>{PowerData[3]}</span>
        </InnerTop>
        <InnderBottom>
          <div>
            <InfoPowerTitle>벤치프레스</InfoPowerTitle>
            <InfoPowerValue style={{ color: "#0066ff" }}>
              {PowerData[0] !== 1 ? PowerData[0] : PowerData[0] - 1}
            </InfoPowerValue>
          </div>
          <div>
            <InfoPowerTitle>데드리프트</InfoPowerTitle>
            <InfoPowerValue style={{ color: "#7affbf" }}>
              {PowerData[1] !== 1 ? PowerData[1] : PowerData[1] - 1}
            </InfoPowerValue>
          </div>
          <div>
            <InfoPowerTitle>스쿼트</InfoPowerTitle>
            <InfoPowerValue style={{ color: "#00d1ff" }}>
              {PowerData[2] !== 1 ? PowerData[2] : PowerData[2] - 1}
            </InfoPowerValue>
          </div>
        </InnderBottom>
      </InnerInfo>
    </ChartsBox>
  );
}

const ChartsBox = styled.div`
  position: relative;
  z-index: 1;
`;

const InnerInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 60px;
  left: 46px;
  width: 200px;
`;

const InnerTop = styled.div`
  margin-bottom: 30px;

  & p {
    margin: 0 auto;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #888888;
  }

  & span {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: ${(props) => props.theme.reverseFontColor};
  }
`;

const InnderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
`;

const InfoPowerTitle = styled.span`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #888888;
`;

const InfoPowerValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
`;
