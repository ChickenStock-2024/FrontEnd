import { useState } from "react";
import { defaultInstance } from "../../api/axios";

const SettingsModalPasswordChange = ({ closeModal }) => {
  // # 3.1. changePassword 상태관리
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordCheck: "",
  });

  // # 3.2. changePassword 바뀔 때마다 저장하기
  const handleInput = (e) => {
    setChangePassword({
      ...changePassword,
      [e.target.id]: e.target.value,
    });
  };

  // # 3.3. changePassword 구조분해 할당
  const { oldPassword, newPassword, newPasswordCheck } = changePassword;

  // # 3.5. 비밀번호 변경 axios
  const postPasswordChange = async () => {
    try {
      // console.log("비밀번호 변경 전: ", changePassword);

      // # 3.5.0. Axios 성공 실패 유무에 따른 처리
      const response = await defaultInstance.post("/user", {
        oldPassword: oldPassword,
        newPassword: newPassword,
        newPasswordCheck: newPasswordCheck,
      });
      // # 3.5.1. 비밀번호 변경 완료 알림
      alert("비밀번호 변경 완료~!!");

      // # 3.5.2. changePassword input값 초기화
      setChangePassword({
        oldPassword: "",
        newPassword: "",
        newPasswordCheck: "",
      });

      // # 5.3. 비밀번호 변경 완료 후, 모달 창 닫기!
      closeModal();
    } catch (error) {
      console.log(error);
      alert(
        "비밀번호 변경에 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
      // # 3.5.2. changePassword input값 초기화
      setChangePassword({
        oldPassword: "",
        newPassword: "",
        newPasswordCheck: "",
      });
      closeModal();
    }
  };

  // 3.4. 비밀번호 변경 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordCheck) {
      alert("비밀번호 확인란을 다시 확인해주세요");
    } else {
      postPasswordChange();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-10">
        <div>
          <h2 className="text-2xl text-center font-bold mb-12">
            비밀번호 변경
          </h2>
          <div className="flex flex-col pt-4 pb-6 border-b-2 ">
            <label
              className="text-left font-semibold text-sm text-gray-900"
              htmlFor="passwordCheck"
            >
              현재 비밀번호
            </label>
            <div className="flex ">
              <input
                type="password"
                id="oldPassword"
                className="flex-1 border border-gray-500 rounded-md p-3"
                placeholder={"현재 비밀번호를 입력해주세요"}
                value={oldPassword}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="flex flex-col pt-6">
            <label
              className="text-left font-semibold text-sm text-gray-900"
              htmlFor="passwordCheck"
            >
              새로운 비밀번호
            </label>
            <div className="flex">
              <input
                type="password"
                id="newPassword"
                className="flex-1 border border-gray-500 rounded-md p-3"
                placeholder={"새로운 비밀번호를 입력해주세요"}
                value={newPassword}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="flex flex-col py-4">
            <label
              className="text-left font-semibold text-sm text-gray-900"
              htmlFor="passwordCheck"
            >
              새로운 비밀번호 확인
            </label>
            <div className="flex">
              <input
                type="password"
                id="newPasswordCheck"
                className="flex-1 border border-gray-500 rounded-md p-3"
                placeholder={"새로운 비밀번호를 다시 입력해주세요"}
                value={newPasswordCheck}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="flex py-4">
            <button className="flex-1 h-10 mt-1 ml-2 px-1 bg-yellow2 rounded-md text-md">
              비밀번호 변경하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SettingsModalPasswordChange;
