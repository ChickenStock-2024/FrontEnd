import React, { useState, useContext, useEffect } from "react";
import QuantityButton from "./QuantityButton";
import PriceToggle from "./PriceToggle";
import useLoginUserinfoStore from "./../../../../store/useLoginUserInfoStore";

const OrderStockInput = ({
  activeTabOption,
  setPrice,
  setQuantity,
  price,
  quantity,
  selectedPrice,
  setSelectedPriceState,
  marketPrice,
  isMarketPrice,
  setIsMarketPrice,
}) => {
  // 스토어에서 로그인 유저의 잔고 가져오기
  const myAccount = useLoginUserinfoStore(
    (state) => state.loginUserInfo.balance || 1000000
  );

  // 임의의 해당 종목 보유량
  const myQuantity = 200;

  // 보유할 수 있는 최대개수
  const maxQuantity =
    activeTabOption === "buy" ? Math.floor(myAccount / price) : myQuantity;

  // 입력할 수 있는 최대 가격
  const maxPrice = Math.floor(myAccount / quantity);

  // const [isMarketPrice, setIsMarketPrice] = useState(false);

  useEffect(() => {
    setPrice(selectedPrice);
  }, [selectedPrice]);

  if (isMarketPrice) {
    setPrice(marketPrice);
    setSelectedPriceState(marketPrice);
  }

  const onChangePrice = (e) => {
    const newPrice = e.target.value;
    if (newPrice >= maxPrice) {
      setPrice(maxPrice);
      setSelectedPriceState(parseInt(maxPrice));
    } else {
      setPrice(newPrice);
      setSelectedPriceState(parseInt(newPrice));
    }
  };

  const onChangeQuantity = (e) => {
    const newQuantity = e.target.value;
    newQuantity >= maxQuantity
      ? setQuantity(maxQuantity)
      : setQuantity(newQuantity);
  };

  const onClickPercent = (percent) => {
    setQuantity(Math.floor((maxQuantity * percent) / 100));
  };

  return (
    <div className="m-4">
      {/* 가격 */}
      <div className="mb-4">
        <PriceToggle
          isMarketPrice={isMarketPrice}
          setIsMarketPrice={setIsMarketPrice}
        />
        <label htmlFor="price" className="font-bold">
          가격
        </label>
        <div className="flex justify-between p-2 border border-gray-400 rounded-md">
          <input
            id="price"
            value={price}
            type="number"
            min={0}
            step={100}
            className={`w-full focus:outline-none text-right ${isMarketPrice ? "text-gray-300" : ""}`}
            onChange={onChangePrice}
          />
          <span className="text-gray-400">원</span>
        </div>
      </div>

      {/* 수량 */}
      <div className="mb-4">
        <label htmlFor="quantity" className="font-bold">
          수량
        </label>
        <div className="flex justify-between p-2 border border-gray-400 rounded-md">
          <input
            id="quantity"
            value={quantity}
            type="number"
            min={0}
            className="w-full focus:outline-none text-right"
            onChange={onChangeQuantity}
          />
          <span className="text-gray-400">주</span>
        </div>
      </div>
      {/* 수량 퍼센트 버튼 */}
      <div className="grid grid-cols-4 gap-2">
        <QuantityButton
          percent={10}
          onClickPercent={onClickPercent}
          disabled={price == 0}
        />
        <QuantityButton
          percent={25}
          onClickPercent={onClickPercent}
          disabled={price == 0}
        />
        <QuantityButton
          percent={50}
          onClickPercent={onClickPercent}
          disabled={price == 0}
        />
        <QuantityButton
          percent={100}
          onClickPercent={onClickPercent}
          disabled={price == 0}
        />
      </div>

      {/* 주문 총액 */}
      <div className="my-6">
        <div className="font-bold">주문 총액</div>
        <div className="text-right text-3xl font-bold">
          {(price * quantity).toLocaleString("ko-KR")}원
        </div>
      </div>

      {/* 내 잔고 */}
      <div className="my-6">
        <div className="font-bold">내 잔고</div>
        <div className="text-right text-2xl font-bold">
          {myAccount.toLocaleString("ko-KR")}원
        </div>
      </div>

      {/* 매수/매도 버튼 */}
    </div>
  );
};

export default OrderStockInput;
