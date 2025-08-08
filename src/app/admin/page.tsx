"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function AdminPage() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 로그인 폼 상태
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // barcode 상태
  const [value, setValue] = useState("");

  // 로그인 상태 감시
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setUid(user?.uid ?? null);
      setLoading(false);

      if (user) {
        const ref = doc(db, "app", "config");
        const snap = await getDoc(ref);
        setValue(String(snap.data()?.barcode ?? ""));
      } else {
        setValue("");
      }
    });
    return () => unsub();
  }, []);

  const login = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`로그인 실패: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자만 허용
    setValue(e.target.value.replace(/[^0-9]/g, ""));
  };

  const onSave = async () => {
    try {
      const ref = doc(db, "app", "config");
      await setDoc(ref, { barcode: value }, { merge: true });
      alert("저장되었습니다.");
      router.push("/"); // 저장 후 인덱스로 이동
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`저장 실패: ${msg}`);
    }
  };

  // 화면
  if (loading) {
    return (
      <main className="max-w-md mx-auto p-6">
        <p>로딩 중…</p>
      </main>
    );
  }

  if (!uid) {
    // 로그인 폼
    return (
      <main className="max-w-md mx-auto p-6 pt-[120px]">
        <h1 className="text-2xl font-semibold mb-4">관리자 로그인</h1>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded px-4 py-3 border"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded px-4 py-3 border"
          />
          <button
            onClick={login}
            className="rounded px-4 py-3 bg-black text-white disabled:opacity-60"
            disabled={!email || !password}
          >
            로그인
          </button>
        </div>
      </main>
    );
  }

  // 로그인 후 – 숫자 입력 & 저장
  return (
    <main className="max-w-md mx-auto p-6 pt-[120px]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">바코드 설정</h1>
        <button onClick={logout} className="text-sm underline">
          로그아웃
        </button>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="숫자 입력"
          className="flex-1 rounded-full px-5 py-3 text-sm outline-none border"
        />
        <button
          onClick={onSave}
          className="shrink-0 rounded-full px-5 py-3 bg-black text-white"
          disabled={!value}
        >
          저장
        </button>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        저장하면 메인 페이지 입력란에 자동 반영됩니다.
      </p>
    </main>
  );
}
