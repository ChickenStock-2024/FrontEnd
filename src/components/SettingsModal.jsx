import React from "react";
import Button from "./Button";

const SettingsModal = () => {
  return (
    <div className="p-10">
      <div>
        <h2 className="text-2xl text-center font-bold mb-12">설정</h2>
        <div>
          <div className="flex justify-between border-b-2 py-2 mb-2">
            <span>알림</span>
            <div className="bg-yellow-400">토글버튼</div>
          </div>
          <div className="flex justify-between border-b-2 py-2 mb-2">
            <span>카카오톡 알림</span>
            <div className="bg-yellow-400">토글버튼</div>
          </div>
          <div className="flex flex-col py-4">
            <label htmlFor="nickname">닉네임 변경</label>
            <input type="text" name="" id="nickname" />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button text={"저장"} />
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
