import React from "react";
import "./Header.css";
import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <div>
      {/* <header>
        <div>
          <div>로고</div>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <ul>
              <li>대회</li>
              <li>랭킹</li>
              <li>설정</li>
              <li>마이페이지</li>
            </ul>
          </nav>
        </div>
      </header> */}
      <header className="Header sticky inset-x-0 top-0 z-50 left-0 bg-white text-gray-600 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img alt="#" src={logo} className="w-12 h-12" />
            <a href="/">
              <span className="ml-3 text-xl">치킨스톡</span>
            </a>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/trading" className="mr-5 hover:text-gray-900">
              대회
            </a>
            <a href="/ranking" className="mr-5 hover:text-gray-900">
              랭킹
            </a>
            <a href="#" className="mr-5 hover:text-gray-900">
              설정
            </a>
            <a href="mypage" className="mr-5 hover:text-gray-900">
              마이페이지
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
