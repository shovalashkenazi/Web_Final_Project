import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function Chart() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const dates = [];
  const datesCount = {};
  orders.map((o) => {
    const shortDate = o.date.slice(0, 10);
    dates.push(shortDate);
    datesCount[shortDate] = datesCount[shortDate] || 0 + 1;
  });
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Orders By",
        data: Object.values(datesCount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
