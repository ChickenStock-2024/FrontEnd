import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import useLoginUserStore from "../store/useLoginUserStore.jsx";

import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import Modal from "./Modal";
import SettingsModal from "./SettingsModal/SettingsModal.jsx";

const Header = () => {
  // const setLoginId = () => {
  //   console.log("loginId: ", loginId);
  //   useLoginUserStore.setState({ loginId: loginId });
  //   console.log("loginId: ", loginId);
  // };

  const loginId = useLoginUserStore((state) => state.loginUserInfo.loginId);
  const loginUserInfo = useLoginUserStore((state) => state.loginUserInfo);
  // const loginUserInfo = useLoginUserStore((state) => state.loginUserInfo);
  // const { loginUserInfo } = useLoginUserStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log("지금 로그인한 loginMemberId: ", loginId);
  console.log(loginUserInfo);

  // console.log("지금 유저의 로그인 유무: ", isLogin);

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
            <div>
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
