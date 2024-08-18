import React from "react";

import "./Media.css"

const Media = () => {
  return (
    <section id="media">
      <div className="media-container">
        <div className="media-item">
          <div className="media-video-container">
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame"
              frameborder="0"
            ></iframe>
          </div>
          <div className="media-video-info">
            <h2>سالاد نودل</h2>
            <p>
              نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی
              آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
              ببرید.
            </p>
            <button>ویدیوهای بیشتر</button>
          </div>
        </div>
        <div className="media-item mid">
          <div className="media-video-container">
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame"
              frameborder="0"
            ></iframe>
          </div>
          <div className="media-video-info">
            <h2>اینستاگرام هاتی نودل</h2>
            <p>
              نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
              دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
              سالم و كاملی ساخته است.
            </p>
            <button>ادامه مطلب</button>
          </div>
        </div>
        <div className="media-item">
          <div className="media-video-container">
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame"
              frameborder="0"
            ></iframe>
          </div>
          <div className="media-video-info">
            <h2>برنج گلستان</h2>
            <p>
              عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست.
              با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان
              گلستان؛‌ لایق بهترین ها هستند.
            </p>
            <button>مشاهده محصولات</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
