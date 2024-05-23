import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarChart = ({ labels, data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Number of incidents",
                        data,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderColor: "rgba(255, 255, 255, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, [labels, data]);

    return <canvas ref={chartRef} />;
};

export default BarChart;
