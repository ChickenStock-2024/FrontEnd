import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ECharts from "echarts-for-react";

import ChartTitle from "./ChartTitle";
import rawData from "./samsung_stock";

const companyName = "삼성전자";

// 이동평균(MA) 계산하는 함수
function calculateMA(dayCount, data) {
  var result = [];
  for (var i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push("-");
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += +data[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}
const dates = rawData.map(function (item) {
  return item[0].slice(0, 10);
});
const data = rawData.map(function (item) {
  return [+item[1], +item[4], +item[3], +item[2]];
});

const volume = rawData.map(function (item) {
  return item[5];
});

const StockChart = ({ stockId }) => {
  console.log(dates);
  console.log(data);

  // 그래프 그리는 부분
  const [options, setOptions] = useState({
    legend: {
      data: ["이동평균5", "이동평균10", "이동평균20", "이동평균30", "거래량"],
      inactiveColor: "#777",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
        type: "cross",
        lineStyle: {
          color: "#777",
          width: 2,
          opacity: 1,
        },
      },
    },
    // toolbox: {
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: false,
    //     },
    //     brush: {
    //       type: ["lineX", "clear"],
    //     },
    //   },
    // },
    xAxis: [
      {
        type: "category",
        data: dates,
        axisLine: { lineStyle: { color: "#8392A5" } },
      },
      {
        type: "category",
        gridIndex: 1,
        data: dates,
        boundaryGap: false,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: "#777" } },
        min: "dataMin",
        max: "dataMax",
      },
    ],
    yAxis: [
      {
        scale: true,
        axisLine: { lineStyle: { color: "#8392A5" } },
        splitLine: { show: false },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
    ],
    grid: [
      {
        left: "10%",
        right: "8%",
        height: "50%",
      },
      {
        left: "10%",
        right: "8%",
        top: "68%",
        height: "16%",
      },
    ],

    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        start: 50,
        end: 100,
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: "slider",
        top: "85%",
        start: 50,
        end: 100,
      },
    ],

    series: [
      {
        type: "candlestick",
        name: `${companyName}📈`,
        data: data,
        itemStyle: {
          color: "#EF4444",
          color0: "#3B82F6",
          borderColor: "#EF4444",
          borderColor0: "#3B82F6",
        },
      },
      {
        name: "이동평균5",
        type: "line",
        data: calculateMA(5, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
      {
        name: "이동평균10",
        type: "line",
        data: calculateMA(10, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
      {
        name: "이동평균20",
        type: "line",
        data: calculateMA(20, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
      {
        name: "이동평균30",
        type: "line",
        data: calculateMA(30, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
        },
      },
      {
        name: "거래량",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volume,
      },
    ],
  });

  // const { stockId } = useParams();

  return (
    <div>
      <ChartTitle stockId={stockId} />
      <ECharts option={options} style={{ height: "500px" }} />
    </div>
  );
};

export default StockChart;
