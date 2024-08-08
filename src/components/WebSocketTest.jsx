import { useMemo } from "react";
import useStompData from "../hooks/useStompData";
import OrderBookStockPrice from "./Trading/OrderSection/OrderMain/OrderBookStockPrice";

const WebSocketTest = () => {
  const { offers, bids, stockInfo } = useStompData();

  // offers 배열을 memoized 값으로 캐싱
  const reversedOffers = useMemo(() => {
    return [...offers].reverse();
  }, [offers]);

  return (
    <>
      <div className="text-2xl">실시간 데이터 테스트 페이지</div>
      <div className="flex">
        <div>
          <div>주식코드 : {stockInfo.stockCode}</div>
          <div>주식체결시간 : {stockInfo.transactionTime}</div>
          <div>주식현재가 : {stockInfo.currentPrice}</div>
          <div>전일대비부호 : {stockInfo.changeSign}</div>
          <div>전일대비 :{stockInfo.change}</div>
          <div>시가 : {stockInfo.openingPrice}</div>
          <div>최고가 : {stockInfo.highestPrice}</div>
          <div>최저가 : {stockInfo.lowestPrice}</div>
        </div>
        <div className="hoka w-48">
          {reversedOffers.map((item, idx) => {
            const changeRate = (
              ((item.price - yesterDayStockClosingPrice) /
                yesterDayStockClosingPrice) *
              100
            ).toFixed(2);
            return (
              <OrderBookStockPrice
                key={item.price}
                price={parseInt(item.price)}
                volume={parseInt(item.volume)}
                bgColor={"bg-blue-100"}
                // changeRate={changeRate}
                // totalSellingVolume={totalSellingVolume}
                // totalBuyingVolume={totalBuyingVolume}
              />
            );
          })}
          {bids.map((item, idx) => {
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
        </div>
      </div>
    </>
  );
};

export default WebSocketTest;
