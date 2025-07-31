import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/about_header.png"
        title="호주 키알라 퓨어 푸드"
        subtitle="KIALLA PURE FOODS"
      />
      <section>
        <div>
          <span>더 깨끗하게, 신선하게</span>
          <span>KIALLA PURE FOODS</span>
          <p>
            호주 QLD(퀸스랜드) 州(주), TOOWOOMBA(투움바)지역에 위치한
            KIALLA(키알라)라는 이름의 농장의 농장주는 토양의 생명력이 미래
            세대를 위한 농업의 열쇠라고 믿고 화학 물질이 없고 영양이 풍부한
            곡물을 지속 가능한 방식으로 재배하려는 간절한 열망에서 1970년부터
            유기농 경작을 실시해 왔으며, 이에 뜻을 함께하는 주변의 다른
            농장주들도 유기농 경작을 시작하게 되었습니다. 이러한 유기농
            개척자들은 더 건강하고 지속 가능한 농업 방법을 찾는 동료 농부들과
            자신들의 철학을 공유하기 위해, 1988년에 KIALLA PURE FOODS PTY
            LTD(키알라 퓨어 푸드)라는 법인회사를 설립하여 본격적인 유기농 곡물
            생산 및 공급 사업을 시작하게 되었습니다. 그 이후로 KIALLA의 사업은
            규모와 역량 모두에서 성장하여 우리의 브랜드이름인 "KIALLA"는
            호주뿐만 아니라 많은 해외 시장으로 최고의 품질의 유기농 곡물 및 곡물
            가공식품을 공급하는 유기농 곡물 제품의 아이콘이 되었습니다.
          </p>
        </div>
        <Image
          src="/brandStory/header1.png"
          alt="about_1"
          width={100}
          height={100}
          unoptimized
        />
        <p>
          저희 공장은 DARING DOWNS(달링다운) 중심부에 위치해 있으며 유기농
          곡물이 재배되는 농장들 한 가운데에서 여전히 운영되고 있는 호주에서
          마지막으로 남아있는 제분공장으로 달링다운을 지나 NSW(뉴사우스웨일스)
          북부로 이어지는 풍부한 검은 충적토로 둘러싸여 있습니다. 호주의 다른
          제분공장들이 경제적인 이유로 이전했지만, 우리는 지역 주민들과 유기농
          농부들 모두를 위한 기회를 적극적으로 개발하면서 지역에 대한 투자와
          성장을 계속하고 있습니다.
        </p>
      </section>
      <section className="px-10 pt-10 pb-10 md:pb-[120px] md:flex md:gap-[80px] max-w-[1200px] mx-auto">
        <div className="w-full pb-10 md:pb-0">
          <Image
            src="/images/img1.png"
            alt="유기농"
            width={0}
            height={0}
            unoptimized
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/img2.png"
            alt="유기농"
            width={0}
            height={0}
            unoptimized
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
