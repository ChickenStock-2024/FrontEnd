import { create } from "zustand";

// hook기반으로 생성을 한다.
const useLoginUserStore = create((set) => ({
  // 상태선언
  loginUserInfo: {
    loginId: "0",
    isLogin: false,
    nickname: "",
    rank: "",
    rating: "",
    tier: "",
    profileImg: "",
  },

  // 함수를 사용하여 set사용시 상태 가져와 변경가능
  // update: () => set((state) => ({ bears: state.bears + 1 })),
  // removeloginUserInfo: () => set({ bears: 0 }),
}));
export default useLoginUserStore;
