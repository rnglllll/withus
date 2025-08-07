"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "키알라 스토리", href: "/brand-story" },
    { name: "제품 소개", href: "/products" },
    { name: "제품 구매", href: "#" },
    { name: "키알라 소개", href: "/about" },
    { name: "유기농 브랜드", href: "/organic" },
    { name: "문의하기", href: "/contact" },
  ];

  // 1. 경로가 바뀌면 드롭다운 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 2. 헤더 외 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur p-4 border-b border-white"
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="로고"
            width={80}
            height={40}
            priority
          />
        </Link>

        {/* 햄버거 버튼 (모바일 ~ md만) */}
        <button
          className="block lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>

        {/* 메뉴 (lg 이상만) */}
        <ul className="hidden lg:flex gap-6 text-[16px] text-white">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="cursor-pointer font-normal hover:font-semibold transition-all"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 드롭다운 메뉴 (모바일 ~ md만) */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
          open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-xl font-normal px-2 text-white">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="cursor-pointer hover:font-semibold transition-all"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
