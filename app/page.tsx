import { redirect } from "next/navigation";

// หน้าแรกของเว็บคือหน้า Login
export default function HomePage() {
  redirect("/login");
}
