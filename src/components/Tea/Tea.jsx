import React from "react";

const Tea = () => {
  return (
    <section className="intro-product">
      <div className="product-banner">
        <div className="product-image-container">
          <img src="../../../public/images/image3-new.jpg" alt="tea" />
        </div>
        <div className="product-title-container">
          <h1>چای گلستان</h1>
          <p>معرفی محصول</p>
        </div>
      </div>
      <div className="devider">
        <article className="product-info-container">
          <h2>سابقه‌ای به قدمت یک عمر</h2>
          <p>
            چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
            بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین
            نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌
            حس خوب آرامش را به همراه دارد.
          </p>
          <p>
            برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌
            قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین
            دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده
            مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
            یادماندنی آن است.
          </p>
          <button>محصولات چای</button>
        </article>
      </div>
    </section>
  );
};

export default Tea;
