import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { threechart } from "./threechart";

const HomeChartDiv = styled.div`
  height: 70vh;
  padding-top: 30px;
  margin: 30px 20px;
  font-size: ${(props) => props.theme.fontSizeH1};
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
`;

const BarData = {
  options: {
    chart: {
      type: "bar",
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
      text: "삼대력 TOP 10",
      offsetY: 10,
      style: {
        fontSize: "16px",
        fontWeight: 600,
        color: "black",
      },
    },
    xaxis: {
      categories: threechart.map((x) => x.name),
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
      offsetX: -80,
      offsetY: 10,
      fontSize: "12px",
      labels: {
        color: "grey",
      },
      markers: {
        width: 20,
        height: 10,
        fillColors: ["#3F8CFF", "#7FBA7A", "#FF754C"],
      },
    },
  },
};

export default function HomeChart() {
  return (
    <HomeChartDiv>
      <ApexCharts
        options={BarData.options}
        series={[
          {
            name: "데드리프트",
            data: threechart.map((x) => x.deadlift),
          },
          {
            name: "벤치프레스",
            data: threechart.map((x) => x.benchpress),
          },
          {
            name: "스쿼트",
            data: threechart.map((x) => x.squat),
          },
        ]}
        width="100%"
        height="100%"
        type="bar"
      />
    </HomeChartDiv>
  );
}
