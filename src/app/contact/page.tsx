"use client";

import HeroSection from "@/components/HeroSection";
import Script from "next/script";
import React, { useCallback, useEffect } from "react";

const ContactPage = () => {
  const initMap = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!window.naver || !window.naver.maps) return;

    const center = new window.naver.maps.LatLng(37.535203, 127.083834);

    const map = new window.naver.maps.Map("map", {
      center,
      zoom: 17,
    });

    new window.naver.maps.Marker({
      position: center,
      map,
      title: "키알라 베이커리",
    });
  }, []);

  // 혹시 스크립트가 먼저 로드되어 있는 경우도 대비
  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <main>
      {/* 실제 발급받은 키로 교체 */}
      <Script
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=3e4y3k50iq"
        strategy="afterInteractive"
        onLoad={initMap}
      />

      <HeroSection
        backgroundImage="/contact/contact_header.png"
        title="문의하기"
        subtitle="CONTACT"
      />

      <section className="max-w-[1200px] mx-auto px-10 xl:px-0 py-26">
        <div className="flex flex-col">
          <div id="map" className="w-full h-[438px]" />
          <div className="flex items-center py-6 px-7 bg-orange">
            <span className="font-semibold flex-2/5 md:flex-1/5">서울 본사</span>
            <span className="flex-3/5 md:flex-4/5">서울 광진구 자양로26길 19 1층</span>
          </div>
        </div>

        <div className="flex flex-col gap-10 py-9 px-7">
          <div className="flex">
            <span className="font-semibold flex-2/5 md:flex-1/5">가맹 문의</span>
            <span className="flex-3/5 md:flex-4/5">베이커리사업부: 임익환 팀장 010 - 6213 - 4933</span>
          </div>
          <div className="flex">
            <span className="font-semibold flex-2/5 md:flex-1/5">제품구매 문의</span>
            <span className="flex-3/5 md:flex-4/5">영업부: 양기훈 팀장 010 - 6792 - 9523</span>
          </div>
          <div className="flex">
            <span className="font-semibold flex-2/5 md:flex-1/5">대표 이메일</span>
            <span className="flex-3/5 md:flex-4/5">kiallabakery@gmail.com</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
