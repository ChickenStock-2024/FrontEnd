import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// hook기반으로 생성을 한다.
const useLoginUserInfoStore = create(
  persist(
    (set) => ({
      // 상태선언
      loginUserInfo: {
        loginId: null,
        isLogined: null,
        isCompParticipant: null,
        nickname: "",
        rank: "",
        accountId: null,
        balance: null,
        rating: "",
        tier: "",
        kakaoUser: null,
      },

      // LoginUserInfo 관련데이터, set, clear 함수로 변경가능
      setLoginUserInfo: (loginUserInfo) => set({ loginUserInfo }),
      clearLoginUserInfo: () =>
        set({
          loginUserInfo: {
            loginId: null,
            isLogined: null,
            isCompParticipant: null,
            nickname: "",
            rank: "",
            accountId: null,
            balance: null,
            rating: "",
            tier: "",
            kakaoUser: null,
          },
        }),
    }),
    {
      name: "loginUserInfo", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
    }
  )
);
export default useLoginUserInfoStore;
