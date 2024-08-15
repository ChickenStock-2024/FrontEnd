import React, { useState, useEffect, useInsertionEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultInstance } from "../../../api/axios";
import ECharts from "echarts-for-react";

import ChartTitle from "./ChartTitle";

const companyIdNames = {
  "005930": { companyId: 1, companyName: "삼성전자" },
  "009150": { companyId: 2, companyName: "삼성전기" },
  "000660": { companyId: 3, companyName: "SK하이닉스" },
  299660: { companyId: 4, companyName: "셀리드" },
  "042700": { companyId: 5, companyName: "한미반도체" },
  "035420": { companyId: 6, companyName: "NAVER" },
  "035720": { companyId: 7, companyName: "카카오" },
  "028300": { companyId: 8, companyName: "HLB" },
  "084650": { companyId: 9, companyName: "랩지노믹스" },
  257720: { companyId: 10, companyName: "실리콘투" },
};

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
    result.push(Math.round(sum / dayCount));
  }
  return result;
}

const StockChart = () => {
  const { stockId } = useParams();
  const [dailyStockPrice, setDailyStockPrice] = useState([]);
  const [options, setOptions] = useState({});
  const { companyId, companyName } = companyIdNames[stockId] || {};

  useEffect(() => {
    getDailyStockPrice();
  }, [stockId]);

  useEffect(() => {
    if (dailyStockPrice.length > 0) {
      const dates = dailyStockPrice.map(function (item) {
        return item.dateTime;
      });

      const datas = dailyStockPrice.map(function (item) {
        return [
          +item.openingPrice,
          +item.closingPrice,
          +item.lowPrice,
          +item.highPrice,
        ];
      });

      const volume = dailyStockPrice.map(function (item) {
        return item.volume;
      });

      setOptions({
        legend: {
          data: [
            "이동평균5",
            "이동평균10",
            "이동평균20",
            "이동평균30",
            "거래량",
          ],
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
            height: "55%",
          },
          {
            left: "10%",
            right: "8%",
            top: "72%",
            height: "16%",
          },
        ],
        dataZoom: [
          {
            type: "inside",
            xAxisIndex: [0, 1],
            start: 90,
            end: 100,
          },
          {
            show: true,
            xAxisIndex: [0, 1],
            type: "slider",
            top: "90%",
            start: 90,
            end: 100,
          },
        ],
        series: [
          {
            type: "candlestick",
            name: `${companyName}📈`,
            data: datas,
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
            data: calculateMA(5, datas),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "이동평균10",
            type: "line",
            data: calculateMA(10, datas),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "이동평균20",
            type: "line",
            data: calculateMA(20, datas),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "이동평균30",
            type: "line",
            data: calculateMA(30, datas),
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
    }
  }, [dailyStockPrice]);

  const getDailyStockPrice = async () => {
    try {
      const response = await defaultInstance.get(
        `/daily-stock-price/${companyId}`
      );
      setDailyStockPrice(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ChartTitle stockId={stockId} />
      <ECharts option={options} style={{ height: "550px" }} />
    </div>
  );
};

export default StockChart;
