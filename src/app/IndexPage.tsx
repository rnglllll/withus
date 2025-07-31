import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function IndexPage() {
  return (
    <main>
        <section
            className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ backgroundImage: 'url("/images/indexbg.png")' }}
        >
            <div className="text-center flex flex-col gap-8">
                <Image
                    src="/images/logowhite.svg"
                    alt="로고"
                    width={0}
                    height={0}
                    className="w-[150px] lg:w-[200px] h-auto mx-auto transition-all duration-300 ease-in-out"
                    priority
                />
            <p className="text-white text-3xl lg:text-4xl font-light transition-all duration-300 ease-in-out">
                <span className="font-semibold">건강빵</span>의 시작은
                <br className="block lg:hidden" />
                <span className="lg:inline">
                <span className="font-semibold"> 밀가루</span>부터 달라야 합니다</span>
            </p>
        </div>
        </section>
        <section
  className="h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat flex justify-center items-center transition-all duration-500 ease-in-out"
  style={{ backgroundImage: 'url(\"/images/indexbg2.png\")' }}
>
  <p className="text-white text-2xl lg:text-3xl font-semibold text-center transition-all duration-300 ease-in-out">
    <span>정직한 밀가루, 건강한 빵</span>
    <br />
    <span>키알라 베이커리는 밀가루부터 다릅니다</span>
  </p>
</section>
    <section className="md:pt-[120px] md:px-10 md:flex md:max-w-[1200px] md:mx-auto">

  <div className="flex w-full md:max-w-[230px] flex-row md:flex-col items-center md:items-start justify-between md:justify-start px-6 pt-10 md:py-10 bg-[#3B1408] text-white">
  {/* 텍스트는 그대로 왼쪽 정렬 */}
  <p className="text-2xl font-semibold leading-snug text-left">
    건강하고 깨끗한<br />
    유기농 건강빵,<br />
    키알라 베이커리
  </p>

  {/* 이미지만 따로 감싸서 중앙 정렬 */}
  <div className="ml-4 md:ml-0 md:mt-4 md:w-full">
    <Image
      src="/images/logowhite.svg"
      alt="로고"
      width={0}
      height={0}
      className="w-[120px] md:w-full h-auto md:mx-auto transition-all duration-300 ease-in-out"
      priority
    />
  </div>
</div>



  <div className="flex-1">
    <p className="px-6 py-6 md:p-0 md:pl-6 lg:pl-[80px] text-sm bg-[#3B1408] md:bg-white text-white md:text-[#333333] leading-relaxed">
  몸에 좋은 빵은 메인 재료인 밀가루부터 다릅니다. 키알라 베이커리는 세계에서 가장 넓은 유기농 농지를 보유하고 있고,
  세계적으로 자연친화적 국가로 잘 알려진 호주에서 생산한 100% 유기농 곡물가루(밀가루포함)만을 사용합니다.
  키알라 베이커리에서 사용하는 유기농 밀가루는 세계 최초로 Plate 2 Farm을 통하여 호주 어느 농장에서 생산한 유기농 곡물을
  사용하고 있는지를 소비자 여러분에게 제공하고 있습니다.
</p>

<div className="px-6 md:pl-6 py-4 md:py-6 lg:pl-[80px] bg-[#3B1408] md:bg-white">
  <span className="inline-flex items-center text-sm font-semibold text-white md:text-[#333333]">
    브랜드스토리 <ChevronRight className="w-4 h-4" />
  </span>
</div>

  </div>
</section>
<section className='px-10 pt-10 pb-10 md:pb-[120px] md:flex md:gap-[80px] max-w-[1200px] mx-auto'>
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
<section
  className="px-6 py-15 md:py-[120px] bg-no-repeat bg-left bg-cover bg-fixed flex justify-center items-center"
  style={{ backgroundImage: 'url("/images/indexbg3.png")' }}
>
    <div className='max-w-[1200px]'>
        <div className='flex flex-col md:flex-row items-start'>
            <p className='text-3xl md:text-4xl font-semibold mb-6 md:mb-0'>
                자연 그대로를 담아<br />더 맛있는 간식
            </p>
            <div className='md:flex-1/3 md:pl-6 lg:pl-[80px] mb-6'>
                <p className='mb-4'>
                    호주청정 유기농 밀가루만을 사용해 만든 키알라 브레드는 건강과 맛 모두를 고스란히 담았습니다.<br />진한 풍미와 순수한 맛을 경험해 보세요.
                </p>
                <span className="inline-flex items-center text-sm font-semibold">
                    브랜드스토리 <ChevronRight className="w-4 h-4" />
                </span>
            </div>
        </div>
        <div className='flex flex-col gap-8 md:flex-row'>
            <div>
                <Image
                src="/images/bread1.png"
                alt="BREAD"
                width={0}
                height={0}
                unoptimized
                className="w-full h-auto"
                priority
                />
                <p className='mt-4 mb-2 text-2xl font-semibold'>BREAD</p>
                <p>깜빠뉴, 무화과 깜빠뉴</p>
            </div>
            <div>
                <Image
                src="/images/bread2.png"
                alt="DESSERT"
                width={0}
                height={0}
                unoptimized
                className="w-full h-auto"
                priority
                />
                <p className='mt-4 mb-2 text-2xl font-semibold'>DESSERT</p>
                <p>휘낭시에, 마들렌</p>
            </div>
            <div>
                <Image
                src="/images/bread3.png"
                alt="GOLD EDITION"
                width={0}
                height={0}
                unoptimized
                className="w-full h-auto"
                priority
                />
                <p className='mt-4 mb-2 text-2xl font-semibold'>GOLD EDITION</p>
                <p>호라산 식빵, 호라산 치아바타, 호라산 포카치아</p>
            </div>
        </div>
    </div>
</section>
<section
            className="py-15 lg:py-[120px] bg-cover bg-center bg-no-repeat flex justify-center items-center text-white"
            style={{ backgroundImage: 'url("/images/indexbg4.png")' }}
        >
            <div className='max-w-[1200px] flex flex-col items-center gap-4 px-6 text-sm md:text-base'>
<p className='text-2xl font-semibold'>생산자 조회 시스템</p>
<p className='text-center pb-8'>
    키알라 베이커리가 사용한 제품의 곡물이 어느 농장에서 생산되고 있는지<br className="block lg:hidden" />정보를 제공하여 소비자가 안전한 식품 선택을 할 수 있도록 노력하고 있습니다.<br />
아래의 검색 창에 Batch 번호의 처음 4자리를 입력하시면 생산자 정보를 확일할 수 있습니다.
</p>
<div className="relative w-full max-w-[800px] bg-white rounded-full">
  <input
    type="text"
    placeholder="숫자 입력"
    className="w-full rounded-full px-5 py-3 pr-24 text-sm outline-none text-[#333] placeholder:text-[#999]"
  />
  <button
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3B1408] text-white text-sm px-5 py-2 rounded-full"
  >
    조회
  </button>
</div>
</div>
</section>
<section
  className="w-full h-auto bg-contain bg-no-repeat bg-bottom px-6 py-15 md:py-[120px] flex justify-center"
  style={{ backgroundImage: 'url("/images/indexbg5.png")' }}
>
  <div className="md:flex flex-row max-w-[1200px] w-full">
    <div className="flex flex-col md:py-6 md:justify-between items-start md:mr-15">
      <p className="text-3xl md:text-4xl font-semibold mb-6">
        건강한 간식,<br />키알라 브레드
      </p>
      <div>
        <p className="text-sm mb-2">
          키알라가 유기농 식품에 전념하고 있는 이유는
          우리의 전체 식품 체계가 토양, 식물, 동물, 음식, 사람,
          그리고 환경과 연결되어 있다는 것을 너무나 잘 인식하기 때문입니다.
        </p>
        <span className="inline-flex items-center text-sm font-semibold mb-6">
          유기농 브랜드 <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </div>

    <Image
      src="/images/img3.png"
      alt="img"
      width={0}
      height={0}
      unoptimized
      className="w-full max-w-[690px] max-h-[400px]"
      priority
    />
  </div>
</section>



    </main>
  );
}
