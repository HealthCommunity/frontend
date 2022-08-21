import styled from "styled-components";
import ApexCharts from "react-apexcharts";

function setChartOption() {
    const ChartOptions = {
        options: {
            chart: {
                type: "donut",
            },
            legend: {
                position: "bottom",
            },
            responsive: [
                {
                    breakpoint: 480,
                },
            ],
            plotOptions: {
                pie: {
                    donut: {
                        size: "80%",
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                label: "삼대력",
                                fontFamily: "Pretendard",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "18px",
                                lineHeight: "26px",
                                textAlign: "center",
                                color: "#888888",
                            },
                            value: {
                                show: true,
                                fontFamily: "Pretendard",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "36px",
                                lineHeight: "44px",
                                textAlign: "center",
                                color: "#222222",
                            },
                        },
                    },
                },
            },
            labels: ["데드리프트", "벤치프레스", "스쿼트"],
            fill: {
                opacity: 1,
                colors: ["#0066FF", "#7AFFBF", "#00D1FF"],
            },
        },
    };

    return ChartOptions.options;
}

export default function ProfileChart({ PowerData }) {
    return (
        <HomeChartDiv>
            <ApexCharts
                options={setChartOption()}
                series={PowerData}
                type="donut"
                width="500"
            />
        </HomeChartDiv>
    );
}

const HomeChartDiv = styled.div`
    width: 500px;
    height: 400px;
    margin: 100px 20px;
`;
