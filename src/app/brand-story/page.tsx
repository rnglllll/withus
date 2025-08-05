import Image from "next/image";
import React from "react";
import HeroSection from "@/components/HeroSection";

const BrandStoryPage = () => {
  return (
    <main className="transition-all duration-300 ease-in-out">
      <HeroSection
        backgroundImage="/brandStory/header1.png"
        title="키알라 브랜드를 소개합니다"
        subtitle="BRAND STORY"
      />
      <div className="max-w-[1200px] mx-auto px-10 xl:px-0 pt-26 text-xl">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold text-orange">
              빵은, 밀가루부터 달라야 하니까요
            </span>
            <div className="flex flex-col pb-[34px] gap-5 text-base">
              <p>
                1995 년, 축산기술을 배우기 위해 낯선 땅, 호주로 향했습니다. 서툰
                영어, 막막한 미래 속에서 우연히 마주한 인연 하나가 제 삶을
                바꿨습니다. <br />
                작은 축산가공 공장에서 일을 배우며 땀으로 기술을 익혀가던 어느
                겨울 아침, 고된 노동을 마친 뒤 잠시 주어졌던 단 하나의 위로.
              </p>
              <p>
                그건 바로, 한 조각의 샌드위치였습니다.
                <strong>터키쉬 브레드</strong>
                . 촉촉하고 쫄깃한 그 빵 사이에 후무스, 토마토, 양파, 햄이 담겨
                있었죠.
                <br />
                <strong>
                  처음 보는 조합, 처음 맛보는 식감. 하지만 그 순간만큼은
                  세상에서 가장 따뜻한 한 끼였습니다.
                </strong>
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-[18px] items-center md:items-stretch h-auto md:h-[426px] overflow-hidden">
  <div className="w-full md:w-2/3 h-full overflow-hidden">
    <Image
      src="/brandStory/bread1_1.png"
      alt="img1"
      width={690}
      height={426}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-full md:w-1/3 h-full overflow-hidden">
    <Image
      src="/brandStory/bread1_2.png"
      alt="img2"
      width={486}
      height={426}
      className="w-full h-full object-cover"
    />
  </div>
</div>


            <p className="text-sm leading-[26px] text-[var(--color-gray)] pt-4 pb-[41px]">
              터키쉬브레드 : 1970년대에 많은 튀르키에사람들이 호주로 이민왔고 그
              중에 튀르키에에서 빵집을 운영하던 사람이 호주사람들의 입맛에 맞는
              빵을 만들어 판매하기 시작하였고, 현재 호주사람이라면 모두가 알고 있는 호주 국민빵이 되었음.
              중국에는 없는 우리나라 자장면과 같다.
            </p>
          </div>
          <span className="text-base pb-[76px]">
            그 기억은 지금까지 제 안에 남아 수십 년이 지난 지금, 저는 호주
            유기농 밀 브랜드 ‘키알라 퓨어(Kialla Pure)’의 유기농 밀가루를 한국에
            소개하며, 정말 건강한 빵이란 무엇인가를 다시 생각하게 되었습니다.{" "}
            <strong>
              빵은 속까지 편안해야 합니다. 소화가 쉽고, 혈당 부담이 적으며, 매일
              먹어도 안심할 수 있어야 합니다.
            </strong>
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-[26px] leading-[36px]">
              그래서 우리는, KIALLA BAKERY 를 시작합니다.
            </span>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-2 items-center w-full">
                <Image
                  src="/brandStory/bread2_1.png"
                  alt="img1"
                  width={384}
                  height={426}
                  className="max-w-[550px] w-full"
                />
                <span className="text-base text-center">
                  세계 자연청정국 호주산 100% 유기농 밀가루
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <Image
                  src="/brandStory/bread2_2.png"
                  alt="img2"
                  width={384}
                  height={426}
                  className="max-w-[550px] w-full"
                />
                <span className="text-base text-center">
                  천연발효종을 사용한 느린 숙성의 철학
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <Image
                  src="/brandStory/bread2_3.png"
                  alt="img3"
                  width={384}
                  height={426}
                  className="max-w-[550px] w-full"
                />
                <span className="text-base text-center">
                  당뇨·알러지에도 대응 가능한 밀 제품 라인
                </span>
              </div>
            </div>
          </div>
          <span className="text-base py-16">
            우리는 추억 속 터키쉬 브레드부터, 아이도, 부모도 함께 먹을 수 있는
            진짜 식사빵을 만듭니다. KIALLA BAKERY 는 단순한 빵집이 아닙니다.
            한 조각의 빵에, 안심과 따뜻함을 담는 공간입니다. 그리고 그
            빵을 통해 누군가의 하루를 더 나아지게 하고 싶은, 하나의 작은
            약속입니다.
          </span>
          <blockquote className="relative text-gray-700 leading-relaxed pl-8 pt-16 pb-28 mx-auto max-w-[680px]">
            <span className="font-potta-one absolute left-[-25px] top-1 text-[80px] text-gray-300 select-none">
              “
            </span>
            <p className="text-2xl leading-[46px]">
              젊은 시절, 호주에서 처음 만난 그 빵. 세월이 흘러도 잊히지 않는 그
              맛을,
              이젠 나이가 들어도 부담 없이 즐길 수 있게 만들고 싶었습니다.
              당뇨가 있는 분들도, 알러지가 있는 분들도 편하게 먹을 수 있도록…
              그 마음 하나로 연구하고 또 연구했습니다.
            </p>
          </blockquote>
          <div className="flex flex-col gap-16 pb-26 h-full">
            <div className="border-b border-gray-300 w-full" />
            <div className="flex flex-col lg:flex-row gap-[22px] items-center lg:items-stretch h-full">
              <Image
                src="/brandStory/img3_1.png"
                alt="aborigin"
                width={478}
                height={365}
                className="max-w-[550px] lg:max-w-[478px] w-full"
              />
              <div className="flex flex-col justify-between w-full min-h-[300px] py-5">
                <span className="text-base leading-[30px]">
                  “KIALLA(키알라)”라는 단어는 호주 원주민의(애보리진) 언어에서
                  유래된 것으로 알려져 있으며, 정확한 의미에 대한 공식적인
                  기록은 없지만, 호주 언어학자들은 “비옥한 땅(Fertile Land)”,
                  “좋은 땅(Good Land)”, “물이 많은 땅”을 의미한다고 해석하고
                  있습니다.
                  <br /> 실제로 호주 Victoria주에 위치한 Kialla 지역은 농업과
                  낙농업이 발달한 비옥한 지역으로, 특히 Kialla Lakes라 불리는
                  인공호수가 있는 주거지역으로도 알려져 있습니다.
                  <br /> 이처럼, 호주에서는 원주민지명을 그대로 유지하거나
                  변형하여 사용하는 경우가 많습니다.
                </span>
                <a href="/about" className="inline-flex items-center">
                <span className="font-semibold text-base">자세히 보기&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 화면 전체 너비를 차지하는 섹션 */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center relative z-[-15]"
        style={{ backgroundImage: 'url("/brandStory/header1.png")' }}
      >
        <div className="bg-black/60 absolute inset-0 z-[-10]" />
        <div className="max-w-[1200px] mx-auto px-10 xl:px-0 py-16">
          <div className="flex flex-col gap-8 items-center py-28">
            <div className="flex flex-col lg:flex-row gap-6 w-full items-center">
              <Image
                src="/brandStory/img4_1.png"
                alt="img1"
                width={588}
                height={250}
                className="max-w-[588px] w-full lg:min-w-[588px]"
              />
              <span className="text-white text-base leading-[30px]">
                <strong>
                  KIALLA BAKERY 빵의 메인 재료인 밀가루부터 다릅니다.
                </strong>{" "}
                세계에서 가장 넓은 유기농 농지를 보유하고 있고, 세계적으로
                자연친화적 국가로 잘 알려진 호주에서 생산한 100% 유기농
                밀가루만을 사용합니다. 호주 키알라 본사의 R&D팀과 공동으로
                협력하여 유기농 호라산 밀가루를 이용한, 국내 제과 제빵 시장에
                맞는 건강빵 및 디저트류를 개발하여 진정한 유기농 건강빵, 키알라
                베이커리를 오픈하게 되었습니다.
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <Image
                src="/brandStory/img4_2.png"
                alt="img2"
                width={588}
                height={250}
                className="max-w-[588px] w-full lg:min-w-[588px]"
              />
              <span className="text-white text-base leading-[30px]">
                <strong>KIALLA PURE ORGANIC</strong>은 여왕의 땅, 호주 Queens
                Land 주 Toowoomba 지역에 위치하고 있으며 이 지역 역시 곡물이 잘
                자랄 수 있는 비옥하고 물이 풍부한 지역으로 자연 친화적이고
                건강한 농산물을 유기농으로 생산하여 소비자에게 유기농 식품의
                중요성과 건강한 식품을 제공한다는 의미로{" "}
                <strong>
                  KIALLA PURE ORGANICS라는 브랜드를 사용하고 있습니다.
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-10 xl:px-0 py-30 pb-52">
        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold leading-[40px]">
              한국 고객 여러분께 드리는 인사말
            </span>
            <p className="text-base leading-[26px] flex flex-col gap-4">
              <span>
                한국 고객 여러분께, 이 자리를 빌어 여러분께 진심 어린 감사와
                설렘을 담아 인사를 전합니다.
              </span>
              <span>
                지금으로부터 13년 전, 키알라 퓨어 푸드(Kialla Pure Foods)는
                한국에 유기농 밀가루를 처음 수출하며 소중한 인연을 시작했습니다.
                그 후 10여 년 동안 우리는 한국의 다양한 베이커리에 꾸준히 유기농
                밀가루를 공급해 왔고,
              </span>
              <span>
                그 과정에서 키알라를 신뢰하고 사랑해주시는 수많은 고객 여러분을
                만날 수 있었습니다.
                <br /> 여러분의 변함없는 성원에 깊은 감사를 드립니다. 오늘,
                저희는 한층 더 뜻 깊은 도전을 시작합니다.
              </span>
              <span>
                단순한 원료 공급을 넘어,{" "}
                <strong>
                  키알라 퓨어 오가닉 본사가 한국의 유기농 베이커리 전문업체와
                  함께 ‘키알라 베이커리(Kialla Bakery)’를 공식 런칭하게 되었음을
                  기쁜 마음으로 알립니다.
                </strong>
              </span>
              <span>
                이 파트너십은 단순한 사업 확장이 아니라,{" "}
                <strong>
                  호주 청정 자연에서 자란 100% 유기농 밀가루로 만든 건강한 빵을
                  한국 고객 여러분께 직접 전하고자 하는 저희의 진심 어린
                  약속입니다.
                </strong>
                <br /> 앞으로 키알라퓨어푸드의 베이커리 연구 개발팀은 한국
                파트너와 긴밀히 협업하여,
                <br />{" "}
                <strong>
                  한국인의 입맛과 라이프스타일에 맞춘 다양한 유기농 베이커리
                  제품들을 선보일 예정입니다.
                </strong>
              </span>
              <span>
                몸에 좋은 건강한 빵은 정직한 밀가루에서 시작됩니다. 그리고
                건강한 식탁은 믿을 수 있는 선택에서 완성됩니다.
              </span>
              <span>
                키알라는 앞으로도 여러분의 건강한 한 끼를 위해 정직하게
                나아가겠습니다.
                <br /> 다시 한 번 깊은 감사의 마음을 전하며, 앞으로도 따뜻한
                관심과 성원 부탁드립니다. 감사합니다.
              </span>
            </p>
            <div className="flex items-center">
              <Image
                src="/brandStory/img_autograph.png"
                alt="img1"
                width={134}
                height={50}
              />
              <span>키알라퓨어 오가닉 대표</span>
            </div>
          </div>
          <Image
  src="/brandStory/img5_1.png"
  alt="img1"
  width={486}
  height={300}
  unoptimized
  className="w-full h-auto max-h-[600px] object-cover"
/>

        </section>
      </div>
    </main>
  );
};

export default BrandStoryPage;
