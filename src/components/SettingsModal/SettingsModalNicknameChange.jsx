import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultInstance } from "../../api/axios";
import useLoginUserInfoStore from "../../store/useLoginUserInfoStore";

const SettingsModalNicknameChange = ({ closeModal }) => {
  const nav = useNavigate();
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  const setLoginUserInfo = useLoginUserInfoStore(
    (state) => state.setLoginUserInfo
  );

  // # 2.1. changeNickname 상태관리
  const [changeNickname, setChangeNickname] = useState({
    newNickname: "",
    isNicknameChecked: false,
    checkedNickname: "",
  });

  // // # 2.2. newNickname 바뀔 때마다 저장하기
  const handleInput = (e) => {
    setChangeNickname({
      ...changeNickname,
      [e.target.id]: e.target.value,
    });
  };

  // # 2.3. changeNickname 구조분해 할당
  const { newNickname, isNicknameChecked, checkedNickname } = changeNickname;

  // # 2.4. 닉네임 중복 검사 axios
  const getNicknameChecked = async () => {
    try {
      // console.log("닉네임 중복 검사 전: ", newNickname);

      // Axios의 응답 객체에서 직접 checkedNickname 추출
      const response = await defaultInstance.get(
        `/auth/nickname/${newNickname}`
      );
      const checkedNickname = response.data.nickname;

      alert("닉네임 중복 확인 완료~!!");
      // console.log("중복 확인 완료 닉네임: ", checkedNickname);

      // 진행 상태 업데이트
      setChangeNickname({
        ...changeNickname,
        isNicknameChecked: true,
        checkedNickname: checkedNickname,
      });
    } catch (error) {
      console.log(error);
      alert(
        "닉네임 중복 확인 중 오류: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  // # 2.5. 닉네임 변경 axios
  const postNicknameChange = async () => {
    try {
      // console.log("닉네임 변경 전: ", changeNickname);

      // # 2.5.0. Axios의 응답 객체에서 직접 checkedEmail 추출
      const response = await defaultInstance.post("/user/nickname", {
        nickname: newNickname,
      });
      // # 2.5.1. 닉네임 변경 완료 알림
      alert("닉네임 변경 완료~!!");

      // # 2.5.2. 진행 상태 업데이트
      setLoginUserInfo({
        ...loginUserInfo,
        nickname: response.data.nickname,
      });
      // console.log("닉네임 변경 전: ", loginUserInfo.nickname);

      // # 2.5.3. 닉네임 변경 완료 후, 모달 창 닫기!
      closeModal();
    } catch (error) {
      console.log(error);
      alert(
        "닉네임 변경에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  // 2.6. 닉네임 변경 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNicknameChecked || newNickname != checkedNickname) {
      alert("닉네임 중복 확인을 다시 진행해주세요");
    } else {
      postNicknameChange();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-10">
        <div>
          <h2 className="text-2xl text-center font-bold mb-12">닉네임 변경</h2>
          <div className="flex flex-col py-4">
            <label
              htmlFor="newNickname"
              className="mb-8 pb-2 border-b-2 text-center text-lg font-medium"
            >
              변경할 닉네임을 입력해주세요
            </label>
            <div className="flex">
              <input
                type="text"
                id="newNickname"
                className="flex-1 border border-gray-500 rounded-md p-3"
                placeholder={loginUserInfo.nickname}
                value={changeNickname.newNickname}
                onChange={handleInput}
              />
              <button
                className="flex-none h-10 mt-1 ml-2 px-1 bg-yellow3 rounded-md text-sm"
                type="button"
                onClick={getNicknameChecked}
              >
                중복확인
              </button>
            </div>
            <div className="flex py-8">
              <button className="flex-1 h-10 mt-1 ml-2 px-1 bg-yellow2 rounded-md text-md">
                닉네임 변경하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SettingsModalNicknameChange;
