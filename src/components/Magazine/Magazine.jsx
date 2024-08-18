import React from "react";

import "./Magazine.css";

const Magazine = () => {
  return (
    <section id="magazine">
      <div id="gap"></div>
      <div className="magazine-title-wrapper">
        <h2 className="magazine-title">مجله گلستان</h2>
      </div>
      <div className="magazine-container">
        <div className="magazine-items">
          <div className="magazine-item">
            <div className="magazine-image-container">
              <img
                src="../../../public/images/recipe-pic2.jpg"
                alt="Spagetti"
              />
            </div>
            <div className="magazine-info-container">
              <h2>ماکارانی با سبزیجات</h2>
              <p>
                ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
                می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
                روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
              </p>
              <button>ادامه مطلب</button>
            </div>
          </div>
          <div className="magazine-item midd">
            <div className="magazine-image-container">
              <img src="../../../public/images/recipe-pic3.jpg" alt="Soup" />
            </div>
            <div className="magazine-info-container">
              <h2>سوپ مکزیکی</h2>
              <p>
                گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا
                روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع
                آن بیرون آورده…
              </p>
              <button>ادامه مطلب</button>
            </div>
          </div>
          <div className="magazine-item">
            <div className="magazine-image-container">
              <img
                src="../../../public/images/recipe-pic1.jpg"
                alt="Chilaquiles"
              />
            </div>
            <div className="magazine-info-container">
              <h2>چیلاکیله</h2>
              <p>
                احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
                فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
                فهرست
              </p>
              <button>ادامه مطلب</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
