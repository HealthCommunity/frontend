import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { getToday } from "../../../Func/GetTodayFunc";

const MainChartDiv = styled.div`
  height: 80vh;
  padding: 100px 0px;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontSizeH1};
`;

const BarData = {
  options: {
    chart: {
      type: "bar",
      height: 100,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: `${getToday()} 기준 3대력 상위 10명`,
      style: {
        fontSize: "20px",
        fontWeight: 600,
        color: "grey",
      },
    },
    xaxis: {
      categories: ["123123", "123"],
      labels: {
        formatter: function (val) {
          return val + "KG";
        },
        style: {
          colors: "grey",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        style: {
          colors: "grey",
          fontSize: "16px",
          fontWeight: 500,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "KG";
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#3F8CFF", "#7FBA7A", "#FF754C"],
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
      fontSize: "14px",
      labels: {
        color: "grey",
      },
      markers: {
        width: 14,
        height: 14,
        fillColors: ["#3F8CFF", "#7FBA7A", "#FF754C"],
      },
    },
  },
};

function MainChart() {
  return (
    <MainChartDiv>
      <ApexCharts
        options={BarData.options}
        series={[
          {
            name: "Dead Lift",
            data: ["123123", "123"],
          },
          {
            name: "Bench Press",
            data: ["123123", "123"],
          },
          {
            name: "Squat",
            data: ["123123", "123"],
          },
        ]}
        width="100%"
        height="100%"
        type="bar"
      />
    </MainChartDiv>
  );
}

export default MainChart;
