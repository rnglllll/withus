'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    '키알라 스토리',
    '제품 소개',
    '제품 구매',
    '키알라 소개',
    '유기농 브랜드',
    '문의하기',
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur p-4 border-b border-white">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* 로고 */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="로고"
            width={80}
            height={40}
            priority
          />
        </div>

        {/* 햄버거 버튼 (모바일 ~ md만) */}
        <button
          className="block lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>

        {/* 메뉴 (lg 이상만) */}
        <ul className="hidden lg:flex gap-6 text-[16px] text-white">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer font-normal hover:font-semibold transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 드롭다운 메뉴 (모바일 ~ md만) */}
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden lg:hidden
          ${open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="flex flex-col gap-4 text-xl font-normal px-2 text-white">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:font-semibold transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
