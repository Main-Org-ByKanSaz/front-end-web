// Calls web-api's auth endpoints through the /api proxy in next.config.ts.

/** What POST /auth/login returns. */
export interface LoginResult {
  userId: string;
  name?: string;
  access_token: string;
}

/** What GET /auth/profile returns: the user, without the password. */
export interface Profile {
  userId: string;
  username: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: string[];
}

const TOKEN_KEY = "access_token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const saveToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

/** Reads the error message NestJS sends, such as "user or password is incorrect". */
async function errorMessage(response: Response, fallback: string) {
  const body = await response.json().catch(() => null);
  const message = body?.message;
  if (Array.isArray(message)) return message.join(", ");
  return typeof message === "string" ? message : fallback;
}

export async function login(
  username: string,
  password: string,
): Promise<LoginResult> {
  let response: Response;
  try {
    response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  } catch {
    throw new Error("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้");
  }

  if (!response.ok) {
    throw new Error(
      response.status >= 500
        ? "เซิร์ฟเวอร์ขัดข้อง โปรดตรวจสอบว่าเปิด web-api และ user-service แล้ว"
        : await errorMessage(response, "เข้าสู่ระบบไม่สำเร็จ"),
    );
  }
  return response.json();
}

export async function getProfile(token: string): Promise<Profile> {
  const response = await fetch("/api/auth/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 401) throw new Error("unauthorized");
  if (!response.ok) {
    throw new Error(await errorMessage(response, "โหลดข้อมูลผู้ใช้ไม่สำเร็จ"));
  }
  return response.json();
}
