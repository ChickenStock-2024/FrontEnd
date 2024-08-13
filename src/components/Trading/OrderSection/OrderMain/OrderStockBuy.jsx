import React, { useState } from "react";
import Modal from "../../../Modal";
import StockBuyModal from "./StockBuyModal";

const OrderStockBuy = ({ price, quantity, isMarketPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="px-4">
      <button
        className="bg-red-500 w-full py-2 rounded text-white font-bold text-xl"
        onClick={openModal}
      >
        Buy
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        setIsModalOpen={setIsModalOpen}
      >
        <StockBuyModal
          closeModal={closeModal}
          price={price}
          quantity={quantity}
          isMarketPrice={isMarketPrice}
        />
      </Modal>
    </div>
  );
};

export default OrderStockBuy;
