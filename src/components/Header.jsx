import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "./Button.jsx";
import Modal from "./Modal.jsx";

import LogoNameImage from "./../assets/logoName.svg";

import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

import useLoginUserInfoStore from "../store/useLoginUserInfoStore.js";
import useKakaoLoginCheckStore from "../store/useKakaoLoginCheckStore";

import SettingsModalNotification from "./SettingsModal/SettingsModalNotification.jsx";
import SettingsModalNicknameChange from "./SettingsModal/SettingsModalNicknameChange.jsx";
import SettingsModalPasswordChange from "./SettingsModal/SettingsModalPasswordChange.jsx";
import PostLogout from "./SettingsModal/PostLogout.js";

const Header = () => {
  // 1. 로그아웃 기능 관련
  const nav = useNavigate();

  const clearLoginUserInfo = useLoginUserInfoStore(
    (state) => state.clearLoginUserInfo
  );
  const setCheckKaKaoUser = useKakaoLoginCheckStore(
    (state) => state.setCheckKaKaoUser
  );
  const handleLogout = () => {
    PostLogout(nav, clearLoginUserInfo, setCheckKaKaoUser);
  };

  // 2. 설정 드롭다운 기능 관련
  const [isOpen, setIsOpen] = useState(false);
  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  const loginId = useLoginUserInfoStore((state) => state.loginUserInfo.loginId);
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);

  // 3. 각 모달 열고 닫기 상태 관리
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // console.log("지금 로그인한 loginMemberId: ", loginId);
  // console.log(loginUserInfo);

  return (
    <div>
      <header className="absolute min-w-[768px] inset-x-0 top-0 z-50 left-0 bg-white text-gray-600 body-font border-b border-gray-200">
        {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:h-28"> */}
        <div className="flex flex-wrap py-5 px-20 flex-row items-center h-24">
          <div className="flex title-font font-medium items-center text-gray-900 mb-0">
            {/* <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
            <Link to={"/"}>
              <img
                alt="logo"
                src={LogoNameImage}
                className="w-36 inline-block"
              />
            </Link>
          </div>
          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"> */}
            <Link to={"/trading/005930"}>
              <span className="mr-5 hover:text-gray-900">대회</span>
            </Link>
            <Link to={"/ranking"}>
              <span className="mr-5 hover:text-gray-900">랭킹</span>
            </Link>
            <div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className=" w-full justify-center gap-x-1.5 rounded-md pr-5 mr-5text-sm font-semibold text-gray-600 "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <FiSettings className=" w-6 h-6 inline-block" />
                  </button>
                </div>
                {isOpen && (
                  <div
                    className="absolute -left-[150%] z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="flex justify-center py-1" role="none">
                      <button
                        className="block px-4 py-2 text-center text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => setIsNotificationModalOpen(true)}
                      >
                        알림 설정
                      </button>
                      <Modal
                        isOpen={isNotificationModalOpen}
                        closeModal={() => setIsNotificationModalOpen(false)}
                      >
                        <SettingsModalNotification
                          closeModal={() => setIsNotificationModalOpen(false)}
                        />
                      </Modal>
                    </div>
                    <div>
                      <div className="flex justify-center py-1" role="none">
                        <button
                          className="block px-4 py-2 text-sm text-center text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                          onClick={() => setIsNicknameModalOpen(true)}
                        >
                          닉네임 변경
                        </button>
                        <Modal
                          isOpen={isNicknameModalOpen}
                          closeModal={() => setIsNicknameModalOpen(false)}
                        >
                          <SettingsModalNicknameChange
                            closeModal={() => setIsNicknameModalOpen(false)}
                          />
                        </Modal>
                      </div>
                      <div className="flex justify-center py-1" role="none">
                        <button
                          className="block px-4 py-2 text-sm text-center text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                          onClick={() => setIsPasswordModalOpen(true)}
                        >
                          비밀번호 변경
                        </button>
                        <Modal
                          isOpen={isPasswordModalOpen}
                          closeModal={() => setIsPasswordModalOpen(false)}
                        >
                          <SettingsModalPasswordChange
                            closeModal={() => setIsPasswordModalOpen(false)}
                          />
                        </Modal>
                      </div>
                    </div>
                    <div className="p-3 flex justify-center" role="none">
                      <Button
                        text={"로그아웃"}
                        color={"yellow2"}
                        onClick={handleLogout}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Link to={`/profile/${loginId}`}>
              <CgProfile className="mr-5 w-6 h-6 inline-block" />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
