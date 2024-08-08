import React from "react";
import { useRef, useMemo, useEffect } from "react";
import useStompDataTest from "../../../../hooks/useStompDataTest";
import useStockDataStore from "../../../../store/useStockDataStore";
import OrderBookStockPrice from "./OrderBookStockPrice";

const OrderBook = ({
  setSelectedPrice,
  selectedPriceState,
  setSelectedPriceState,
  setMarketPrice,
  activeTabMarket,
}) => {
  // 호가 mock data
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

  useStompDataTest();
  const hokaData = useStockDataStore((state) => state.hokaData);
  // const offers = useStockDataStore((state) => state.hokaData.offers) || [];
  // const bids = useStockDataStore((state) => state.hokaData.bids) || [];

  const offers = hokaData.offers || [];
  const bids = hokaData.bids || [];
  const stockInfo = useStockDataStore((state) => state.stockInfo);

  // offers 배열을 memoized 값으로 캐싱
  const reversedOffers = useMemo(() => {
    return [...offers].reverse();
  }, [offers]);

  // 매도 매수에 따라 알맞은 시장가 지정
  // useEffect(() => {
  //   if (bids.length > 0) {
  //     setMarketPrice(parseInt(bids[0].price));
  //   }
  // }, [bids, setMarketPrice]);

  useEffect(() => {
    if (activeTabMarket === "buy" && bids.length > 0) {
      setMarketPrice(parseInt(bids[0].price));
    } else if (activeTabMarket === "sell" && offers.length > 0) {
      setMarketPrice(parseInt(offers[0].price));
    }
  }, [bids, offers, setMarketPrice, activeTabMarket]);

  const handleClickPrice = (price) => {
    setSelectedPrice(price);
    setSelectedPriceState(price);
    // 해당 함수가 실행되었을 때 표시가 되어야 함(노란색으로 표시됨)
  };

  console.log(offers);

  return (
    <div className="flex flex-col h-full">
      {/* <div>호가창 시장가 : {stockInfo.currentPrice}</div> */}
      {/* <div>현재가 : {stockInfo.currentPrice}</div> */}
      <div>매도호가 잔량: {hokaData.totalOfferVolume}</div>
      {(offers.length | bids.length) == 0 ? (
        <div>데이터 없음</div>
      ) : (
        <div className="flex-grow overflow-y-scroll">
          {reversedOffers.map((item, idx) => (
            // const changeRate = (
            //   ((item.price - yesterDayStockClosingPrice) /
            //     yesterDayStockClosingPrice) *
            //   100
            // ).toFixed(2); // 전날 종가대비 주가 변동률
            <OrderBookStockPrice
              key={item.price}
              price={parseInt(item.price)}
              volume={parseInt(item.volume)}
              bgColor={"bg-blue-100"}
              txtColor={"text-blue-600"}
              handleClickPrice={handleClickPrice}
              isSelected={selectedPriceState === parseInt(item.price)}
              // changeRate={changeRate}
              // totalSellingVolume={totalSellingVolume}
              // totalBuyingVolume={totalBuyingVolume}
            />
          ))}
          {bids.map((item, idx) => (
            <OrderBookStockPrice
              key={item.price}
              index={idx}
              price={parseInt(item.price)}
              volume={parseInt(item.volume)}
              bgColor={"bg-red-100"}
              txtColor={"text-red-600"}
              handleClickPrice={handleClickPrice}
              isSelected={selectedPriceState === parseInt(item.price)}
            />
          ))}
        </div>
      )}
      <div className="flex-grow overflow-y-scroll">
        {reversedOffers.map((item, idx) => (
          // const changeRate = (
          //   ((item.price - yesterDayStockClosingPrice) /
          //     yesterDayStockClosingPrice) *
          //   100
          // ).toFixed(2); // 전날 종가대비 주가 변동률
          <OrderBookStockPrice
            key={item.price}
            price={parseInt(item.price)}
            volume={parseInt(item.volume)}
            bgColor={"bg-blue-100"}
            txtColor={"text-blue-600"}
            handleClickPrice={handleClickPrice}
            isSelected={selectedPriceState === parseInt(item.price)}
            // changeRate={changeRate}
            // totalSellingVolume={totalSellingVolume}
            // totalBuyingVolume={totalBuyingVolume}
          />
        ))}
        {bids.map((item, idx) => (
          <OrderBookStockPrice
            key={item.price}
            index={idx}
            price={parseInt(item.price)}
            volume={parseInt(item.volume)}
            bgColor={"bg-red-100"}
            txtColor={"text-red-600"}
            handleClickPrice={handleClickPrice}
            isSelected={selectedPriceState === parseInt(item.price)}
          />
        ))}
      </div>
      <div>매수호가 잔량: {hokaData.totalBidVolume}</div>
    </div>
  );
};

export default OrderBook;
