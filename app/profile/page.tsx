"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { clearToken, getProfile, getToken, type Profile } from "@/lib/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // โหลดข้อมูลผู้ใช้จาก GET /auth/profile ด้วย Token ที่ได้ตอนล็อกอิน
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/login");
      return;
    }

    getProfile(token)
      .then(setProfile)
      .catch((error: Error) => {
        if (error.message === "unauthorized") {
          // Token หมดอายุหรือไม่ถูกต้อง ให้ล็อกอินใหม่
          clearToken();
          router.replace("/login");
        } else {
          setErrorMessage(error.message);
        }
      });
  }, [router]);

  const logout = () => {
    clearToken();
    router.push("/login");
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-gray-900 px-4 py-8 text-white">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-xl sm:p-8">
        <h2 className="text-center text-2xl font-extrabold text-blue-400 sm:text-3xl">
          โปรไฟล์
        </h2>

        {errorMessage && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-400">
            {errorMessage}
          </div>
        )}

        {!profile && !errorMessage && (
          <p className="text-center text-gray-400">กำลังโหลดข้อมูล...</p>
        )}

        {profile && (
          <dl className="space-y-3 text-sm">
            <Row label="ชื่อ" value={profile.name} />
            <Row label="Username" value={profile.username} />
            <Row label="อีเมล" value={profile.email} />
            <Row label="เบอร์โทร" value={profile.phone} />
            <Row label="บทบาท" value={profile.role?.join(", ")} />
          </dl>
        )}

        <button
          onClick={logout}
          className="w-full rounded-lg border border-gray-600 px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-gray-700 pb-2">
      <dt className="text-gray-400">{label}</dt>
      <dd className="min-w-0 break-words text-right">{value || "-"}</dd>
    </div>
  );
}
