import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/contact_header.png"
        title="문의하기"
        subtitle="CONTACT"
      />
      <section className="max-w-[1200px] mx-auto px-10 xl:px-0">
        <div>
          <Image
            src="/contact_map.png"
            alt="contact_map"
            width={504}
            height={310}
          />
          <div>
            <span>서울 본사</span>
            <span>서울 광진구 자양로26길 19 1층</span>
          </div>
        </div>
        <div>
          <div>
            <span>가맹 문의</span>
            <span>베이커리사업부 임익환 팀장 010 - 6213 - 4933</span>
          </div>
          <div>
            <span>제품구매 문의</span>
            <span>영업부: 양기훈 팀장 010 - 6792 - 9523</span>
          </div>
          <div>
            <span>대표 이메일</span>
            <span>kiallabakery@gmail.com</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
