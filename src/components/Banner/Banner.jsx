import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-container">
        <div className="banner-info-container">
          <h1>قرعه‌کشی ماهیانه گلستان</h1>
          <h2>قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان</h2>
          <p>
            هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه
            کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال 1403شرکت
            کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
          </p>
          <button>اطلاعات بیشتر</button>
        </div>
        <div className="banner-image-container">
          <img src="../../../public/images/tea-pic1.png" alt="tea" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
