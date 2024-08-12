import { useMemo } from "react";
import useStompData from "../hooks/useStompData";
import useStompDataTest from "../hooks/useStompDataTest";
import useStockDataStore from "../store/useStockDataStore";
import OrderBookStockPrice from "./Trading/OrderSection/OrderMain/OrderBookStockPrice";

const WebSocketTest = () => {
  useStompDataTest("005930");

  const offers = useStockDataStore((state) => state.hokaData.offers) || [];
  const bids = useStockDataStore((state) => state.hokaData.bids) || [];
  const stockInfo = useStockDataStore((state) => state.stockInfo);

  // offers 배열을 memoized 값으로 캐싱
  const reversedOffers = useMemo(() => {
    return [...offers].reverse();
  }, [offers]);

  return (
    <>
      <div className="text-2xl mb-5 text-center pt-24">
        실시간 데이터 테스트 페이지
      </div>
      <div className="flex justify-around">
        <div className="stock">
          <div className="text-lg font-bold">체결 내역 데이터</div>
          <div>주식코드 : {stockInfo.stockCode}</div>
          <div>주식체결시간 : {stockInfo.transactionTime}</div>
          <div>주식현재가 : {stockInfo.currentPrice}</div>
          <div>전일대비부호 : {stockInfo.changeSign}</div>
          <div>전일대비 :{stockInfo.change}</div>
          <div>전일대비율 : {stockInfo.changeRate}</div>
          <div>가중평균주식가격 : {stockInfo.weightedAveragePrice}</div>
          <div>주식시가 : {stockInfo.openingPrice}</div>
          <div>주식최고가 : {stockInfo.highestPrice}</div>
          <div>주식최저가 : {stockInfo.lowestPrice}</div>
          <div>매도호가1 : {stockInfo.sellOffer1}</div>
          <div>매수호가1 : {stockInfo.buyOffer1}</div>
          <div>체결거래량 : {stockInfo.transactionVolume}</div>
          <div>누적거래량 : {stockInfo.cumulativeVolume}</div>
          <div>누적거래대금 : {stockInfo.cumulativeAmount}</div>
          <div>매도체결건수 : {stockInfo.sellTransactions}</div>
          <div>매수체결건수 : {stockInfo.buyTransactions}</div>
          <div>순매수체결건수 : {stockInfo.netBuyTransactions}</div>
          <div>체결강도 : {stockInfo.transactionStrength}</div>
          <div>총매도수량 : {stockInfo.totalSellQuantity}</div>
          <div>총매수수량 : {stockInfo.totalBuyQuantity}</div>
          <div>체결구분 : {stockInfo.transactionType}</div>
          <div>매수비율 : {stockInfo.buyRatio}</div>
          <div>전일거래량대비등락율 : {stockInfo.previousVolumeChangeRate}</div>
          <div>시가시간 : {stockInfo.openingTime}</div>
          <div>시가대비구분 : {stockInfo.openingChangeType}</div>
          <div>시가대비 : {stockInfo.openingChange}</div>
          <div>최고가시간 : {stockInfo.highestTime}</div>
          <div>고가대비구분 : {stockInfo.highestChangeType}</div>
          <div>고가대비 : {stockInfo.highestChange}</div>
          <div>최저가시간 : {stockInfo.lowestTime}</div>
          <div>저가대비구분 : {stockInfo.lowestChangeType}</div>
          <div>저가대비 : {stockInfo.lowestChange}</div>
          <div>영업일자 : {stockInfo.businessDate}</div>
          <div>신 장운영 구분코드 : {stockInfo.operationTypeCode}</div>
          <div>거래정지여부 : {stockInfo.tradingHalt}</div>
          <div>매도호가잔량 : {stockInfo.remainingSellOffer}</div>
          <div>매수호가잔량 : {stockInfo.remainingBuyOffer}</div>
          <div>총 매도호가잔량 : {stockInfo.totalRemainingSellOffer}</div>
          <div>총 매수호가잔량 : {stockInfo.totalRemainingBuyOffer}</div>
          <div>거래량회전율 : {stockInfo.volumeTurnoverRate}</div>
          <div>전일 동시간누적거래량 : {stockInfo.previousSameTimeVolume}</div>
          <div>
            전일 동시간누적거래량비율 : {stockInfo.previousSameTimeVolumeRate}
          </div>
          <div>시간구분코드 : {stockInfo.timeTypeCode}</div>
          <div>임의종료구분코드 : {stockInfo.arbitraryEndTypeCode}</div>
          <div>정적VI발동기준가 : {stockInfo.staticVILimitPrice}</div>
        </div>
        <div className="hoka w-48">
          <div className="text-lg font-bold">호가창</div>
          {reversedOffers.map((item, idx) => {
            // const changeRate = (
            //   ((item.price - yesterDayStockClosingPrice) /
            //     yesterDayStockClosingPrice) *
            //   100
            // ).toFixed(2);
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
