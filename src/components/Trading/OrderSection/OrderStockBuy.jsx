import React, { useState } from "react";
import QuantityButton from "./QuantityButton";

const StockBuy = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const onChangePrice = (e) => {
    setPrice(e.target.value.toLocaleString("ko-KR"));
  };
  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  // 임의의 초기 잔고
  const myAccount = 1000000;

  return (
    <div className="m-4">
      <div className="mb-4">
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
      <div className="grid grid-cols-4 gap-2">
        <QuantityButton percent={"10"} />
        <QuantityButton percent={"25"} />
        <QuantityButton percent={"50"} />
        <QuantityButton percent={"100"} />
      </div>

      {/* 주문 총액 */}
      <div className="my-8">
        <div className="font-bold">주문 총액</div>
        <div className="text-right text-3xl font-bold">
          {(price * quantity).toLocaleString("ko-KR")}원
        </div>
      </div>

      {/* 내 잔고 */}
      <div className="my-8">
        <div className="font-bold">내 잔고</div>
        <div className="text-right text-2xl font-bold">
          {myAccount.toLocaleString("ko-KR")}원
        </div>
      </div>

      {/* 매수/매도 버튼 */}
    </div>
  );
};

export default StockBuy;
