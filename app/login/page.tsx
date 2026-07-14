"use client";

import React, { useState } from "react";

export default function LoginPage() {
  // 1. ตั้ง State สำหรับเก็บค่าที่ยูสเซอร์กรอกข้อมูล
  const [username, setUsername] = useState("testuser");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 2. ฟังก์ชันจัดการตอนกดปุ่ม Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      // ตรงนี้คือจุดที่เราจะยิง API ไปหา Backend (เช่น NestJS ของคุณ)
      // สมมติยิงไปที่ http://localhost:PORT/auth/login

      // 1. ดึงค่าจาก env (ถ้าหาไม่เจอให้ใช้ค่า default เป็นสายว่างหรือ url สำรอง)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("เข้าสู่ระบบไม่สำเร็จ");
      }

      // บันทึก Token หรือจัดการหลังจากล็อกอินผ่านตรงนี้...
      alert("เข้าสู่ระบบสำเร็จ! 🎉");
    } catch (error: any) {
      setErrorMessage(
        error.message || "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 text-white">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-gray-800 p-8 shadow-xl border border-gray-700">
        {/* หัวข้อหน้า Login */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-400">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            กรุณาเข้าสู่ระบบเพื่อใช้งาน
          </p>
        </div>

        {/* แสดงข้อความเตือนเมื่อ Error */}
        {errorMessage && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400 text-center">
            {errorMessage}
          </div>
        )}

        {/* ฟอร์มกรอกข้อมูล */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            {/* ช่องกรอก Username */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="กรอกชื่อผู้ใช้งาน"
              />
            </div>

            {/* ช่องกรอก Password */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* ปุ่มกด Sign In */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors disabled:bg-blue-800 disabled:text-gray-400"
            >
              {isLoading ? (
                <span className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>กำลังตรวจสอบข้อมูล...</span>
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
