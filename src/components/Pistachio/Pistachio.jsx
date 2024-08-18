import React from "react";

const Pistachio = () => {
  return (
    <section className="intro-product">
      <div className="product-banner">
        <div className="product-image-container">
          <img src="../../../public/images/image4-new.jpg" alt="pistachio" />
        </div>
        <div className="product-title-container">
          <h1>پسته گلستان</h1>
          <p>معرفی محصول</p>
        </div>
      </div>
      <div className="devider">
        <article className="product-info-container">
          <h2>آجيل‌های خوش خنده</h2>
          <p>
            خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
            معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
          </p>
          <p>
            پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته
            خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت
            در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک،
            بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به
            ارمغان می‌آورد.
          </p>
          <button>ناتس گلستان</button>
        </article>
      </div>
    </section>
  );
};

export default Pistachio;
