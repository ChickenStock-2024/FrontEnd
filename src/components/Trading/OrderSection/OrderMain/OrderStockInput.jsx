import React, { useState, useContext, useEffect } from "react";
import QuantityButton from "./QuantityButton";
import PriceToggle from "./PriceToggle";
import { PriceContext } from "./OrderMain";

const OrderStockInput = ({
  activeTabOption,
  setPrice,
  setQuantity,
  price,
  quantity,
}) => {
  const { selectedPrice } = useContext(PriceContext);

  const onChangePrice = (e) => {
    setPrice(e.target.value.toLocaleString("ko-KR"));
  };
  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const onClickPercent = (percent) => {
    setQuantity(Math.floor((maxQuantity * percent) / 100));
  };

  // console.log(selectedPrice);
  // useEffect(() => {
  //   console.log("인풋 가격 업뎃", price);
  // }, [price]);
  useEffect(() => {
    console.log("호가 선택 업데이트", selectedPrice);
    setPrice(selectedPrice);
  }, [selectedPrice]);

  // 임의의 초기 잔고
  const myAccount = 1000000;
  // 임의의 해당 종목 보유량
  const myQuantity = 200;

  const maxQuantity =
    activeTabOption === "buy" ? Math.floor(myAccount / price) : myQuantity;

  return (
    <div className="m-4">
      {/* 가격 */}
      <div className="mb-4">
        <PriceToggle />
        <label htmlFor="price" className="font-bold">
          가격
        </label>
        <div className="flex justify-between p-2 border border-gray-400 rounded-md">
          <input
            id="price"
            value={price}
            type="text"
            className="w-full focus:outline-none text-right"
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
            className="w-full focus:outline-none text-right"
            onChange={onChangeQuantity}
          />
          <span className="text-gray-400">주</span>
        </div>
      </div>
      {/* 수량 퍼센트 버튼 */}
      <div className="grid grid-cols-4 gap-2">
        <QuantityButton percent={10} onClickPercent={onClickPercent} />
        <QuantityButton percent={25} onClickPercent={onClickPercent} />
        <QuantityButton percent={50} onClickPercent={onClickPercent} />
        <QuantityButton percent={100} onClickPercent={onClickPercent} />
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
