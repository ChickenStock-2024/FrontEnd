import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// hook기반으로 생성을 한다.
const useCompetitionInfoStore = create(
  persist(
    (set) => ({
      // 상태선언
      competitionInfo: {
        ingCompetition: false,
        competitionId: "",
        title: "",
        startAt: "",
        endAt: "",
      },

      // 함수를 사용하여 set사용시 상태 가져와 변경가능
      setCompetitionInfo: (competitionInfo) => set({ competitionInfo }),

      clearCompetitionInfo: () =>
        set({
          competitionInfo: {
            ingCompetition: false,
            competitionId: "",
            title: "",
            startAt: "",
            endAt: "",
          },
        }),
    }),
    {
      name: "competitionInfo", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
    }
  )
);
export default useCompetitionInfoStore;
