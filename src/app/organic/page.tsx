import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React from "react";

const OrganicPage = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/organic/header.png"
        title="왜 유기농일까요?"
        subtitle="Why Organic?"
      />
      <section className="max-w-[1200px] mx-auto px-10 xl:px-0 pb-30 pt-60 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10">
          <div className="flex items-end justify-center relative">
            <Image
              src="/organic/grass_1.png"
              alt="grass_1"
              width={755}
              height={0}
              className="w-full h-auto md:w-[755px] md:h-[226.5px] absolute bottom-[-60px] md:left-[-50px]"
            />
            <Image
              src="/organic/grass_2.png"
              alt="grass_2"
              width={722}
              height={0}
              className="w-[722px] h-[187px] absolute bottom-[-60px] right-[-50px] hidden md:block"
            />
          </div>
          <p className="px-5 md:px-20 pt-15 pb-15 font-semibold text-xl leading-[40px] tracking-tight text-center bg-orange/10 rounded-2xl">
            유기농 식품에 전념하고 있는 이유는 우리의 전체 식품 체계가 토양,
            식물, 동물, 음식, 사람,
            <br /> 그리고 환경과 연결되어 있다는 것을 너무나 잘 인식하기
            때문입니다.
            <br /> 우리는 화학물질과 살충제를 사용하지 않고 깨끗하고 지속적으로
            식품을 생산하는
            <br /> 호주 정부로부터 인증된 유기농 농장들과 협력하고 있습니다.
          </p>
        </div>
        <p className="flex flex-col gap-8 pt-15 leading-[30px] tracking-tight text-center">
          <span>
            그들은 생물 다양성과 토양 비옥도를 유지하기 위해 전통적인 방법과
            현대적인 연구를 사용하여 자연과 함께 일합니다.
            <br /> 이러한 농업 방법은 종종 노동 집약적이지만 천연 식품 생산의
            실제 비용을 반영합니다.
          </span>
          <span>
            살충제와 제초제와 같은 &apos;빠른 해결&apos; 화학 용액의 사용은
            단기적으로 농작물 수확량을 증가시킬 수 있지만, <br />
            우리의 건강에 더 높은 비용을 초래하고 음식 시스템의 미래 를
            위협합니다.
          </span>
          <span>
            소비자들은 우리가 먹는 것이 우리의 복지에 변화를 가져온다는 것을
            점점 더 많이 인식하고 있습니다.
            <br /> 유기농 식품은 건강하고 영양 균형이 잡힌 토양에서 자라기
            때문에 더 높은 수준의 영양소와
            <br /> 산화 방지제를 가지고 있다는 것을 보여주는 과학적 연구가
            늘어나고 있습니다.
          </span>
          <span>
            또한 유전자 변형 농산물이 아니고 합성 화학 물질이 전혀 없기 때문에,
            <br />
            여러분은 여러분의 몸에 가능한 한 최고의 음식을 공급하고 있다고
            확신할 수 있습니다.
            <br /> 그것이 우리가 먹는 음식이 중요하다고 믿는 이유이고, 그것이
            우리가 유기농을 선택하는 이유입니다.
          </span>
        </p>
        <span className="text-orange text-2xl leading-[50px] font-bold pt-10">
          유기농 식품은 여러분에게 좋고, 농부들에게도 좋고, 지구에도 좋습니다.
        </span>
      </section>
    </main>
  );
};

export default OrganicPage;
