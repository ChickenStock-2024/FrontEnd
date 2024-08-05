import { useContext } from "react";
import React from "react";
import OrderBookStockPrice from "./OrderBookStockPrice";

const OrderBook = () => {
  // const { onClickPrice } = useContext(PriceContext);
  const sellingPrice = [
    {
      price: "80500",
      volume: "28845",
    },
    {
      price: "80600",
      volume: "73585",
    },
    {
      price: "80700",
      volume: "63678",
    },
    {
      price: "80800",
      volume: "54457",
    },
    {
      price: "80900",
      volume: "34698",
    },
    {
      price: "81000",
      volume: "45455",
    },
    {
      price: "81100",
      volume: "14610",
    },
    {
      price: "81200",
      volume: "32469",
    },
    {
      price: "81300",
      volume: "32832",
    },
  ];
  // 매수 호가
  const buyingPrice = [
    {
      price: "80400",
      volume: "79304",
    },
    {
      price: "80300",
      volume: "235585",
    },
    {
      price: "80200",
      volume: "125389",
    },
    {
      price: "80100",
      volume: "182460",
    },
    {
      price: "80000",
      volume: "252045",
    },
    {
      price: "79900",
      volume: "108851",
    },
    {
      price: "79800",
      volume: "90140",
    },
    {
      price: "79700",
      volume: "96475",
    },
    {
      price: "79600",
      volume: "83081",
    },
    {
      price: "79500",
      volume: "142951",
    },
  ];

  return (
    <>
      {sellingPrice.reverse().map((item, idx) => {
        // const changeRate = (
        //   ((item.price - yesterDayStockClosingPrice) /
        //     yesterDayStockClosingPrice) *
        //   100
        // ).toFixed(2); // 전날 종가대비 주가 변동률

        return (
          <OrderBookStockPrice
            key={item.price}
            index={idx}
            price={parseInt(item.price)}
            volume={parseInt(item.volume)}
            bgColor={"bg-blue-100"}
            // onClickPrice={onClickPrice}
            // changeRate={changeRate}
            // totalSellingVolume={totalSellingVolume}
            // totalBuyingVolum={totalBuyingVolum}
          />
        );
      })}

      {buyingPrice.map((item, idx) => {
        return (
          <OrderBookStockPrice
            key={item.price}
            index={idx}
            price={parseInt(item.price)}
            volume={parseInt(item.volume)}
            bgColor={"bg-red-100"}
          />
        );
      })}
    </>
  );
};

export default OrderBook;
