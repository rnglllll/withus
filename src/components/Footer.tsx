import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-4">
      <div className="flex flex-col lg:flex-row items-center px-6 py-15 max-w-[1200px] mx-auto gap-8 lg:gap-[180px]">
  <Image
    src="/images/logowhite.svg"
    alt="로고"
    width={0}
    height={0}
    className="w-[120px] lg:w-[150px] h-auto transition-all duration-300 ease-in-out"
    priority
  />

  <div className="text-sm text-white leading-relaxed">
    <p className="font-semibold mb-2">개인정보처리방침</p>
    <p>키알라베이커리 | 서울 광진구 자양로26길 19 1층</p>
    <p>대표 이메일 : kiallabakery@gmail.com</p>
    <p>가맹 문의 : 070-4139-3177</p>
    <p className="mt-4 text-xs">ⓒ 2025 KIALLA BAKERY. All rights reserved.</p>
  </div>
</div>

    </footer>
  );
}
