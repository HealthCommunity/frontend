import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { threechart } from "./threechart";
import { useState, useEffect } from "react";
import axios from "axios";

function setChartOption(threeData) {
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
                    barHeight: "40%",
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
                //이름
                categories: threeData.map((item) => item.userNickName),
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
        <HomeChartDiv>
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
        </HomeChartDiv>
    );
}

const HomeChartDiv = styled.div`
    width: 325px;
    height: 70vh;
    margin: 100px 20px;
    font-size: ${(props) => props.theme.fontSizeH1};
    box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
`;
