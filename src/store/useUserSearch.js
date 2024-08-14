import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
import zukeeper from "zukeeper";

const useUserSearchStore = create(
  zukeeper(
    // persist(
    (set) => ({
      // 상태선언
      searchMembers: [],

      // 함수를 사용하여 set사용시 상태 가져와 변경가능
      setSearchMembers: (searchMembers) => set({ searchMembers }),
      clearSearchMembers: () => set([]),
    })
    // {
    //   name: "profilePageInfo", // name of the item in the storage (must be unique)
    //   storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
    // }
    // )
  )
);

window.store = useUserSearchStore;
export default useUserSearchStore;
