import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import useLoginUserInfoStore from "../store/useLoginUserInfoStore.jsx";

import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import Modal from "./Modal";
import SettingsModal from "./SettingsModal/SettingsModal.jsx";

const Header = () => {
  // const setLoginId = () => {
  //   console.log("loginId: ", loginId);
  //   useLoginUserInfoStore.setState({ loginId: loginId });
  //   console.log("loginId: ", loginId);
  // };

  const loginId = useLoginUserInfoStore((state) => state.loginUserInfo.loginId);
  const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  // const loginUserInfo = useLoginUserInfoStore((state) => state.loginUserInfo);
  // const { loginUserInfo } = useLoginUserInfoStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log("지금 로그인한 loginMemberId: ", loginId);
  console.log(loginUserInfo);

  // console.log("지금 유저의 로그인 유무: ", isLogined);

  // useEffect(() => {
  //   setLoginId();
  // }, [loginId]);

  return (
    <div>
      <header className="Header sticky inset-x-0 top-0 z-50 left-0 bg-white text-gray-600 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to={"/"}>
              <img alt="logo" src={logo} className="w-12 h-12 inline-block" />
              <span className="ml-3 text-xl">치킨스톡</span>
            </Link>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/trading/1"}>
              <span className="mr-5 hover:text-gray-900">대회</span>
            </Link>
            <Link to={"/ranking"}>
              <span className="mr-5 hover:text-gray-900">랭킹</span>
            </Link>
            {/* <div>
              <button onClick={openModal}>
                <FiSettings className="mr-5 w-6 h-6 inline-block" />
              </button>
              <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                setIsModalOpen={setIsModalOpen}
              >
                <SettingsModal closeModal={closeModal} />
              </Modal>
            </div> */}
            <div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className=" w-full justify-center gap-x-1.5 rounded-md pr-5 mr-5text-sm font-semibold text-gray-600 "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <FiSettings className=" w-6 h-6 inline-block" />
                  </button>
                </div>
                <div
                  className="absolute -left-[150%] z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-center text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      알림 설정
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-center text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      닉네임 변경
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-center text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      비밀번호 변경
                    </a>
                  </div>
                  <div className="p-3 flex justify-center" role="none">
                    <Button text={"로그아웃"} color={"yellow2"} />
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/profile/${loginId}`}>
              {/* <Link to={`/profile/${loginUserInfo && loginUserInfo.loginId}`}> */}
              {/* <Link to={`/profile/${profilePageId}`}> */}
              <CgProfile className="mr-5 w-6 h-6 inline-block" />
              {/* <span className="mr-5 hover:text-gray-900">마이페이지</span> */}
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
