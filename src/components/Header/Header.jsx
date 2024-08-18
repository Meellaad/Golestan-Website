import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="#">صفحه‌ی اصلی</a>
          </li>
          <li className="main-nav__item dropdown">
            <a href="javascript:void(0)" class="dropbtn">شرکت گلستان</a>
            <div className="dropdown-content">
              <a href="">معرفی شرکت</a>
              <a href="">تاریخچه گلستان</a>
              <a href="">اخبار و اطلاعیه ها</a>
              <a href="">مسئولیت های اجتماعی</a>
              <a href="">سازمان فروش</a>
              <a href="">سازمان توزیع</a>
              <a href="">برندها</a>
            </div>
          </li>
          <li className="main-nav__item dropdown">
            <a href="javascript:void(0)" class="dropbtn">محصولات</a>
            <div className="dropdown-content">
              <a href="">چای</a>
              <a href="">ناتس</a>
              <a href="">ادویه و چاشنی</a>
              <a href="">برنج</a>
              <a href="">زعفران و زرشک</a>
              <a href="">دمنوش</a>
              <a href="">حبوبات و غلات</a>
              <a href="">عصاره‌های گیاهی گلستان</a>
              <a href="">قند و شکر</a>
              <a href="">هاتی نودل</a>
              <a href="">سایر محصولات</a>
              <a href="">گل کیس</a>
            </div>
          </li>
          <li className="main-nav__item dropdown">
            <a href="javascript:void(0)" class="dropbtn">وبلاگ</a>
            <div className="dropdown-content">
              <a href="">مجله گلستان</a>
              <a href="">فرهنگ غذایی</a>
              <a href="">سلامت غذایی</a>
              <a href="">تاریخچه</a>
              <a href="">میزبانی و دیزاین</a>
            </div>
          </li>
          <li className="main-nav__item">
            <a href="#">قرعه‌کشی</a>
          </li>
          <li className="main-nav__item">
            <a href="#">استخدام</a>
          </li>
          <li className="main-nav__item dropdown">
            <a href="javascript:void(0)" class="dropbtn">تماس با ما</a>
            <div className="dropdown-content">
              <a href="">دفتر مرکزی</a>
              <a href="">صدای مصرف کنندگان</a>
              <a href="">ارتباط با مشترکین</a>
            </div>
          </li>
          <li className="main-nav__item">
            <a href="#">EN</a>
          </li>
        </ul>
        <div className="logo-container">
          <a href="#" className="main-header__logo">
            <img src="../../../public/images/logo-fr.png" alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
