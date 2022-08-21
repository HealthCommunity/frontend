import styled from "styled-components";
import ApexCharts from "react-apexcharts";

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
            return val + "kg";
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

export default function ProfileChart({ PowerData }) {
  return (
    <ChartsBox>
      <ApexCharts
        options={setChartOption()}
        series={PowerData.slice(0, 3)}
        type="donut"
        width="300"
        height="300"
      />
      <>
        <InnerTop>
          <InfoSumTitle>3대력</InfoSumTitle>
          <InfoSumValue>{PowerData[3]}</InfoSumValue>
        </InnerTop>
        <InnderBottom>
          <div>
            <InfoPowerTitle>벤치프레스</InfoPowerTitle>
            <InfoPowerValue style={{ color: "#0066ff" }}>
              {PowerData[0]}
            </InfoPowerValue>
          </div>
          <div>
            <InfoPowerTitle>데드리프트</InfoPowerTitle>
            <InfoPowerValue style={{ color: "#7affbf" }}>
              {PowerData[1]}
            </InfoPowerValue>
          </div>
          <div>
            <InfoPowerTitle>스쿼트</InfoPowerTitle>
            <InfoPowerValue style={{ color: "#00d1ff" }}>
              {PowerData[2]}
            </InfoPowerValue>
          </div>
        </InnderBottom>
      </>
    </ChartsBox>
  );
}

const ChartsBox = styled.div`
  position: relative;
  width: 300px;
`;

const InnerTop = styled.div`
  position: absolute;
  top: 66px;
  left: 110px;
`;

const InfoSumTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #888888;
`;

const InfoSumValue = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #222222;
`;

const InnderBottom = styled.div`
  position: absolute;
  top: 166px;
  left: 60px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const InfoPowerTitle = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #888888;
`;

const InfoPowerValue = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
`;
