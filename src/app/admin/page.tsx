// src/app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 클라이언트에서만 Firebase 동적 임포트 + 초기화
async function loadFirebase() {
  const [{ initializeApp, getApps, getApp }] = await Promise.all([
    import("firebase/app"),
  ]);
  const [
    { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut },
  ] = await Promise.all([import("firebase/auth")]);
  const [{ getFirestore, doc, getDoc, setDoc }] = await Promise.all([
    import("firebase/firestore"),
  ]);

  if (typeof window === "undefined") {
    throw new Error("Firebase client SDK must run in the browser");
  }
  if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    throw new Error("Missing Firebase env");
  }

  const app =
    getApps().length > 0
      ? getApp()
      : initializeApp({
          apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
          authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
          messagingSenderId:
            process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        });

  const auth = getAuth(app);
  const db = getFirestore(app);

  return {
    auth,
    db,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    doc,
    getDoc,
    setDoc,
  };
}

type AppConfig = { barcode?: string };

export default function AdminPage() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    let unsub: (() => void) | undefined;

    (async () => {
      try {
        const { auth, db, onAuthStateChanged, doc, getDoc } = await loadFirebase();

        unsub = onAuthStateChanged(auth, async (user) => {
          setUid(user?.uid ?? null);
          setLoading(false);

          if (user) {
            const ref = doc(db, "app", "config");
            const snap = await getDoc(ref);
            const data = (snap.data() as AppConfig | undefined) ?? {};
            setValue(String(data.barcode ?? ""));
          } else {
            setValue("");
          }
        });
      } catch {
        setLoading(false);
      }
    })();

    return () => unsub?.();
  }, []);

  const login = async () => {
    try {
      setLoading(true);
      const { auth, signInWithEmailAndPassword } = await loadFirebase();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`로그인 실패: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { auth, signOut } = await loadFirebase();
      await signOut(auth);
      setUid(null);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`로그아웃 실패: ${msg}`);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(/[^0-9]/g, ""));
  };

  const onSave = async () => {
    try {
      const { db, doc, setDoc } = await loadFirebase();
      const ref = doc(db, "app", "config");
      await setDoc(ref, { barcode: value }, { merge: true });
      alert("저장되었습니다.");
      router.push("/");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`저장 실패: ${msg}`);
    }
  };

  if (loading) {
    return (
      <main className="max-w-md mx-auto p-6">
        <p>로딩 중…</p>
      </main>
    );
  }

  if (!uid) {
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
          className="shrink-0 rounded-full px-5 py-3 bg-black text-white disabled:opacity-60"
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
