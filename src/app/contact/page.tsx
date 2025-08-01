import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/contact/contact_header.png"
        title="문의하기"
        subtitle="CONTACT"
      />
      <section className="max-w-[1200px] mx-auto px-10 xl:px-0 py-26">
        <div className="flex flex-col">
          <Image
            src="/contact/contact_map.png"
            alt="contact_map"
            width={1200}
            height={438}
            className="w-full h-auto"
          />
          <div className="flex items-center py-9 px-7 bg-orange">
            <span className="font-text-xl font-semibold flex-1/5">
              서울 본사
            </span>
            <span className="font-text-xl flex-4/5">
              서울 광진구 자양로26길 19 1층
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-9 px-7">
          <div className="flex">
            <span className="font-text-xl font-semibold flex-1/5">
              가맹 문의
            </span>
            <span className="font-text-xl flex-4/5">
              베이커리사업부 임익환 팀장 010 - 6213 - 4933
            </span>
          </div>
          <div className="flex">
            <span className="font-text-xl font-semibold flex-1/5">
              제품구매 문의
            </span>
            <span className="font-text-xl flex-4/5">
              영업부: 양기훈 팀장 010 - 6792 - 9523
            </span>
          </div>
          <div className="flex">
            <span className="font-text-xl font-semibold flex-1/5">
              대표 이메일
            </span>
            <span className="font-text-xl flex-4/5 font-bold">
              kiallabakery@gmail.com
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
