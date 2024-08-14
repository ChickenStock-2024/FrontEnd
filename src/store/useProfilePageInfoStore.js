import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import zukeeper from "zukeeper";

// const userInfo = {
//   member_id: 1,
//   nickname: "쑤",
//   tier: "플래티넘 5",
//   profileImg: profileImg,
// };

const useProfilePageInfoStore = create(
  zukeeper(
    // persist(
    (set) => ({
      // 상태선언
      profilePageInfo: {
        profilePageMemberId: null,
        nickname: "",
        rating: "",
        tier: "",
        profileImg: "",
        isRival: null,
      },
      competitionItems: [],

      // 함수를 사용하여 set사용시 상태 가져와 변경가능
      setProfilePageInfo: (profilePageInfo) => set({ profilePageInfo }),
      clearProfilePageInfo: () =>
        set({
          profilePageInfo: {
            profilePageMemberId: null,
            nickname: "",
            rating: "",
            tier: "",
            profileImg: "",
            isRival: null,
          },
        }),

      setCompetitionItems: (competitionItems) => set({ competitionItems }),
      clearCompetitionItems: () => set([]),
    })
    // {
    //   name: "profilePageInfo", // name of the item in the storage (must be unique)
    //   storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
    // }
    // )
  )
);

window.store = useProfilePageInfoStore;
export default useProfilePageInfoStore;
