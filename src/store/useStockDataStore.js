import { create } from "zustand";

const useStockDataStore = create((set) => ({
  hokaData: {},
  stockInfo: {},

  setHokaData: (hokaData) => set({ hokaData }),
  setStockInfo: (stockInfo) => set({ stockInfo }),
}));

export default useStockDataStore;
