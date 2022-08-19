import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function DonutWithText() {
    const data = {
        labels: ["벤치프레스", "데드리프트", "스쿼트"],
        datasets: [
            {
                data: [100, 170, 200],
                backgroundColor: ["#15CCFC", "#72FCB9", "#005DF9"],
            },
        ],
    };

    return (
        <div>
            <Doughnut
                data={data}
                options={{
                    cutoutPercentage: 90,
                    legend: {
                        display: true,
                    },
                }}
            />
        </div>
    );
}
