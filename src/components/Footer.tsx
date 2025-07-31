import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-4">
        <div className='flex-col px-6 gap-6'>
        <Image
            src="/images/logowhite.svg"
            alt="로고"
            width={0}
            height={0}
            className="w-[120px] lg:w-[150px] h-auto mx-auto transition-all duration-300 ease-in-out"
            priority
        />
      <p>
        개인정보처리방침
        ⓒ 2025 KIALLA BAKERY. All rights reserved.
      </p>
      </div>
    </footer>
  )
}