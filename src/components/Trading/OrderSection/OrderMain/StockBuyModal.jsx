import React from "react";
import { defaultInstance } from "../../../../api/axios";

const StockBuyModal = ({ closeModal, price, quantity, isMarketPrice }) => {
  console.log(price);
  const orderBuyLimit = async () => {
    try {
      const response = await defaultInstance.post("/account/buy/limit", {
        accountId: 1,
        memberId: 1,
        companyId: 1,
        competitionId: 1,
        unitCost: price,
        volume: quantity,
      });
      console.log(response.data);
      closeModal();
    } catch (error) {
      console.log(error);
      alert(
        "지정가 주문을 실패했습니다. " +
          (error.response ? error.response.data.message : error.message)
      );
      closeModal();
    }
  };

  const orderBuyMarket = async () => {
    try {
      const response = await defaultInstance.post("/account/buy/market", {
        accountId: 1,
        memberId: 1,
        companyId: 1,
        competitionId: 1,
        unitCost: price,
        volume: quantity,
      });
      console.log(response.data);
      closeModal();
    } catch (error) {
      console.log(error);
      alert(
        "시장가 주문을 실패했습니다. " +
          (error.response ? error.response.data.message : error.message)
      );
      closeModal();
    }
  };

  return (
    <div>
      {quantity == 0 ? (
        <div className="p-8">
          <div className="text-xl text-center font-bold mb-12">
            주문 수량이 없습니다
          </div>
          <button
            className="bg-red-500 rounded text-white font-bold py-2 w-full"
            onClick={closeModal}
          >
            확인
          </button>
        </div>
      ) : (
        <div className="p-10">
          <div>
            <h2 className="text-2xl text-center font-bold mb-10 text-red-500">
              매수
            </h2>
            <div className="mb-6">
              <div className="flex justify-between py-1">
                <div>주문 단가</div>
                <div>{price} 원</div>
              </div>
              <div className="flex justify-between py-1">
                <div>주문 수량</div>
                <div>{quantity} 주</div>
              </div>
            </div>
            <div className="mb-10">
              <div>주문 총액</div>
              <div className="font-bold text-2xl text-right">
                {(price * quantity).toLocaleString("ko-KR")} 원
              </div>
            </div>
            <div className="text-center mb-8">구매하시겠습니까?</div>
          </div>
          <div className="flex justify-evenly gap-4">
            {/* <Button text={"취소"} onClick={closeModal} /> */}
            <button
              className="bg-red-100 rounded font-bold text-red-500 py-2 w-full"
              onClick={closeModal}
            >
              취소
            </button>
            <button
              className="bg-red-500 rounded text-white font-bold py-2 w-full"
              onClick={() => {
                isMarketPrice ? orderBuyMarket() : orderBuyLimit();
              }}
              // onClick에 주문 요청 보내기
            >
              예
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockBuyModal;
