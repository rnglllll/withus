import BreadTag from "@/components/breadTag";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React from "react";

const ProductsPage = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="/products/header.png"
        title="제품 소개"
        subtitle="Products"
      />
      <div className="max-w-[1200px] mx-auto px-10 xl:px-0 flex flex-col pb-46">
        <section className="pt-24 pb-10 self-center">
          <span className="text-orange text-3xl leading-13 font-semibold text-center block">
  Kialla Bakery는 호주 청정<br />
  밀가루 · 통밀가루 · 호라산밀가루만을 사용합니다.
</span>

        </section>
        {/* Gold Edition */}
        <div className="flex flex-col gap-39">
          <section className="flex flex-col gap-7">
            <span className="text-[40px] leading-13 font-semibold py-5">
              Gold Edition
            </span>
            {/* 빵 리스트 */}
            <div className="flex flex-col gap-15">
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/gold_1.png"
                  alt="bread1"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">
                      호라산 식빵
                    </span>
                    <p className="font-text-base">
                      영양 가득 고소한 건강빵, 호라산 밀가루 100%로 만든 식빵은
                      일반 식빵보다 훨씬 더 고소하고 깊은 맛을 자랑하는 프리미얼
                      건강 식빵입니다. 호라산 밀 100% 또는 고비율로 배합해
                      단백질, 셀레늄, 아연 등 미네랄이 풍부하며 일반 밀보다
                      소화가 잘 되고 포만감도 좋습니다. 결이 쫀쫀하고 고소함이
                      강한 식감을 가지고 있으며 속은 촉촉하면서도 단단해 잼,
                      버터, 크림치즈와 잘 어울립니다.
                    </p>
                  </div>
                  <BreadTag
                    textSrc={[
                      "유기농 호라산밀가루 100%",
                      "무첨가",
                      "비정제",
                      "천연재료",
                    ]}
                  />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/gold_2.png"
                  alt="bread1"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">
                      호라산 치아바타
                    </span>
                    <p className="font-text-base">
                      100% 호라산 밀 치아바타는 고대 곡물로 가공이 적어 영양소
                      보존이 뛰어나고 고단백, 고미네랄일 뿐만 아니라 셀레늄,
                      마그네슘, 아연 함류량도 높습니다.
                      <br /> 유제품과 계란을 사용하지 않고 올리브 오일과 천연
                      발효종만으로 만든 비건 빵이지만 쫄깃하고 고소한 식감을
                      가집니다. 일반 정제 밀보다 혈당을 천천히 올려 당지수가
                      낮고, 현대 밀보다 단순한 글루텐 구조와 천연발효종은 복부
                      팽만감을 줄여줘 소화에도 좋은 빵입니다.
                    </p>
                  </div>
                  <BreadTag
                    textSrc={["유기농 호라산밀가루 100%", "천연발표", "비건빵"]}
                  />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/gold_3.png"
                  alt="bread1"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">
                      호라산 포카치아
                    </span>
                    <p className="font-text-base">
                      100% 호라산 밀가루를 사용해 단백질과 미네랄이 풍부한 고대
                      곡물로 고소한 맛과 영향을 강화합니다. 엑스트라 버진 올리브
                      오일을 사용해 속은 촉촉하고 겉은 바삭한 황금빛 식감을
                      선사합니다.
                      <br /> 설탕, 우유, 버터를 첨가하지 않은 비건 제품으로
                      샐러드, 수프, 파스타와 함께 건강한 곁들임 식사가
                      가능합니다.
                    </p>
                  </div>
                  <BreadTag
                    textSrc={["유기농 호라산밀가루 100%", "천연발표", "비건"]}
                  />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
            </div>
          </section>

          {/* Dessert */}
          <section className="flex flex-col gap-7">
            <span className="text-[40px] leading-13 font-semibold py-5">
              Dessert
            </span>
            {/* 빵 리스트 */}
            <div className="flex flex-col gap-15">
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/dessert_1.png"
                  alt="bread1"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">휘낭시에</span>
                    <p className="font-text-base">
                      고소한 풍미와 영양이 뛰어난 호라산 밀가루로 만든 프렌치
                      클래식 디저트입니다. 혈당 관리 중에도 즐길 수 있는 건강한
                      간식을 찾는 분, 고소하고 촉촉한 구움과자를 좋아하시는
                      분들께 추천 드립니다.
                    </p>
                  </div>
                  <BreadTag textSrc={["유기농 호라산밀가루 100%"]} />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/dessert_2.png"
                  alt="bread1"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">마들렌</span>
                    <p className="font-text-base">
                      고대 곡물 유기농 호라산 밀가루로 만든 프리미엄 건강
                      마들렌입니다. 고소하고 깊은 풍미, 부드러운 식감은 물론
                      비정제 재료로 부담 없이 즐길 수 있는 간식입니다.
                    </p>
                  </div>
                  <BreadTag
                    textSrc={["유기농 호라산밀가루 100%", "비정제재료"]}
                  />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
            </div>
          </section>

          {/* Bread */}
          <section className="flex flex-col gap-7">
            <span className="text-[40px] leading-13 font-semibold py-5">
              Bread
            </span>
            {/* 빵 리스트 */}
            <div className="flex flex-col gap-15">
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/bread_1.png"
                  alt="bread1"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">깜빠뉴</span>
                    <p className="font-text-base">
                      프랑스어로 ’시골빵’을 뜻하는 깜빠뉴는 전통 프랑스식
                      천연발효빵입니다. 천연 발효종 사워도우로 만들어 깊은
                      풍미와 쫄깃한 식감이 특징으로, 천연 발효종을 사용해 소화에
                      좋고 혈당 반응이 낮고, 총밀/호라산밀을 사용해 식이섬유와
                      미네랄이 풍부합니다. 또한 방부제와 설탕을 사용하지 않고
                      깊은 맛과 자연 보존력을 구현했습니다.
                    </p>
                  </div>
                  <BreadTag
                    textSrc={["유기농 호라산밀가루 100%", "천연발효"]}
                  />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/products/bread_2.png"
                  alt="bread2"
                  width={486}
                  height={324}
                  className="max-w-[550px] min-w-[300px] h-full lg:min-w-[486px] w-full m-auto"
                />
                <div className="flex flex-col gap-5 justify-between py-11">
                  <div className="flex flex-col gap-[23px]">
                    <span className="font-text-xl font-semibold">
                      무화과 크림치즈 깜빠뉴
                    </span>
                    <p className="font-text-base">
                      자연의 달콤함과 고소함의 조화, 천연발효 깜빠뉴에 말린
                      무화과의 달콤함과 크림치즈의 부드러운 풍미를 더한
                      빵입니다. 한입 베어 물 때마다 쫀득함, 고소함, 부드러움이
                      어우러지는 프리미엄 건강빵입니다. 따뜻하게 데워 먹거나 꿀
                      한 방울을 뿌려 커피나 와인과 함께 드시면 무화과의
                      자연스러운 달콤함과 크림치즈의 부드러운 고소함이 어우러져
                      완벽한 맛의 균형을 이룹니다.{" "}
                    </p>
                  </div>
                  <BreadTag
                    textSrc={["유기농 호라산밀가루 100%", "천연발표"]}
                  />
                </div>
              </div>
              <div className="border-b border-black/20 w-full" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
