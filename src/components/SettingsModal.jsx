import React from "react";
import Button from "./Button";

const SettingsModal = ({ closeModal }) => {
  return (
    <div className="p-10">
      <div>
        <h2 className="text-2xl text-center font-bold mb-12">설정</h2>
        <div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>알림</span>
            <div className="bg-yellow-400">토글버튼</div>
          </div>
          <div className="flex justify-between border-b py-2 mb-2">
            <span>카카오톡 알림</span>
            <div className="bg-yellow-400">토글버튼</div>
          </div>
          <div className="flex flex-col py-4">
            <label htmlFor="nickname" className="mb-2">
              닉네임 변경
            </label>
            <input
              type="text"
              id="nickname"
              className="border border-gray-500 rounded-md p-3"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button text={"저장"} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
