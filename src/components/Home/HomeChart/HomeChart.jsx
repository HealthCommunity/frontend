import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { threechart } from "./threechart";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeChartDiv = styled.div`
    height: 70vh;
    margin: 100px 20px;
    font-size: ${(props) => props.theme.fontSizeH1};
    box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
`;

const ChartOptions = {
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
                startingShape: "rounded",
                endingShape: "rounded",
                colors: {
                    backgroundBarColors: ["#E6F0FF"],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 9,
                },
            },
        },
        stroke: {
            width: 0.6,
            colors: ["#fff"],
        },
        title: {
            text: "3대력 TOP 10",
            offsetY: 10,
            style: {
                fontFamily: "GangwonEduPower",
                fontSize: "16px",
                fontWeight: 400,
                color: "#222222",
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
            colors: ["#0066FF", "#7AFFBF", "#00D1FF"],
        },
        legend: {
            position: "top",
            offsetX: -80,
            offsetY: 10,
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "20px",
            labels: {
                color: "grey",
            },
            markers: {
                width: 20,
                height: 10,
                fillColors: ["#0066FF", "#7AFFBF", "#00D1FF"],
            },
        },
    },
};

export default function HomeChart() {
    const [threeData, setThreeData] = useState([]);

    useEffect(() => {
        axios.get(`http://54.166.132.169:8080/`).then((res) => {
            console.log("삼대력 가져오기 data", res);
        });
    }, []);

    return (
        <HomeChartDiv>
            <ApexCharts
                options={ChartOptions.options}
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
                height="820px"
                type="bar"
            />
        </HomeChartDiv>
    );
}
