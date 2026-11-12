import type { Metadata } from "next";
import { Prompt } from "next/font/google";

import { ResumeView } from "@/components/resume/resume-view";
import { resume } from "@/data/resume";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: `เรซูเม่ ${resume.firstName} ${resume.lastName}`,
  description: resume.title,
};

export default function ResumePage() {
  return (
    <div
      className={`${prompt.className} min-h-dvh bg-gray-200 py-0 md:py-8 print:min-h-0 print:bg-white print:py-0`}
    >
      {/* Prints as one A4 page with the background colours. */}
      <style>{`@page { size: A4; margin: 0; } @media print { html { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      <ResumeView data={resume} />
    </div>
  );
}
