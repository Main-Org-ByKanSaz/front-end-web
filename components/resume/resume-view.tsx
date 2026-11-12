import { Fragment, type ReactNode } from "react";

import type { Resume } from "@/data/resume";

import {
  BriefcaseIcon,
  ContactIcon,
  GearIcon,
  GithubIcon,
  GraduationIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  UserIcon,
} from "./icons";

// Colours taken from the PDF.
const GREEN = "bg-[#8fd975]";
const GREY_PANEL = "bg-[#b3b3b3]";
const TEXT = "text-[#5c5c5c]";

/** An A4 résumé page. Every section is built from the data passed in. */
export function ResumeView({ data }: { data: Resume }) {
  const { photo } = data;

  return (
    <article
      className={`relative mx-auto w-full max-w-[794px] overflow-hidden ${GREEN} ${TEXT} md:flex md:min-h-[1123px] print:min-h-[1123px] print:flex print:h-[297mm] print:w-[210mm] print:max-w-none print:overflow-hidden`}
    >
      {/* Left column: photo, about, contact, skills */}
      <aside className="relative md:ml-[44px] print:ml-[44px] md:w-[336px] print:w-[336px] md:shrink-0 print:shrink-0">
        {/* The grey panel starts behind the lower half of the photo. */}
        <div
          className={`absolute inset-x-0 top-[160px] bottom-0 ${GREY_PANEL}`}
        />

        <div className="relative mx-auto mt-8 size-[300px] rounded-full bg-[#f3f1ee] p-[30px] sm:mt-9 print:mt-9 sm:size-[320px] print:size-[320px] sm:p-[32px] print:p-[32px]">
          <div className="size-full overflow-hidden rounded-full border-4 border-[#5c5c5c]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={`${data.firstName} ${data.lastName}`}
              className="size-full object-cover"
              style={{
                transform: `scale(${photo.zoom ?? 1})`,
                transformOrigin: photo.focus ?? "50% 50%",
                objectPosition: photo.focus ?? "50% 50%",
              }}
            />
          </div>
        </div>

        <div className="relative space-y-6 px-8 pt-5 pb-8 text-white sm:px-12 print:px-12">
          <SideSection icon={<UserIcon className="size-6" />} title="เกี่ยวกับฉัน">
            <div className="space-y-1 text-sm leading-[1.6] font-light">
              {data.about.map((paragraph) => (
                <p key={paragraph} className="indent-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </SideSection>

          <SideSection icon={<ContactIcon className="size-6" />} title="ติดต่อ">
            <ul className="space-y-2 text-base font-light">
              <ContactRow icon={<PhoneIcon className="size-5" />}>
                <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
              </ContactRow>
              <ContactRow icon={<MailIcon className="size-5" />}>
                <a href={`mailto:${data.contact.email}`} className="break-all">
                  {data.contact.email}
                </a>
              </ContactRow>
              <ContactRow icon={<GithubIcon className="size-5" />}>
                <a
                  href={`https://${data.contact.github.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* A long link breaks after a slash, not in the middle of a word. */}
                  {data.contact.github.split("/").map((part, index) => (
                    <Fragment key={index}>
                      {index > 0 && (
                        <>
                          /<wbr />
                        </>
                      )}
                      <span className="whitespace-nowrap">{part}</span>
                    </Fragment>
                  ))}
                </a>
              </ContactRow>
              <ContactRow icon={<PinIcon className="size-5" />}>
                {data.contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactRow>
            </ul>
          </SideSection>

          <SideSection icon={<GearIcon className="size-7" />} title="Skills">
            <ul className="columns-2 gap-4 text-sm font-light">
              {data.skills.map((skill) => (
                <li key={skill} className="ml-4 list-disc break-inside-avoid">
                  {skill}
                </li>
              ))}
            </ul>
          </SideSection>
        </div>
      </aside>

      {/* Right column: name, education, experience */}
      <main className="flex-1 px-6 pt-10 pb-8 sm:px-9 print:px-9 md:pt-[48px] print:pt-[48px] md:pr-8 print:pr-8 md:pl-9 print:pl-9">
        <header className="mb-6">
          <h1 className="text-5xl leading-[1.1] font-bold sm:text-[54px] print:text-[54px]">
            <span className="block">{data.firstName}</span>
            <span className="block pl-12">{data.lastName}</span>
          </h1>
          <p className="mt-2 text-lg sm:text-[21px] print:text-[21px]">{data.title}</p>
        </header>

        <MainSection
          icon={<GraduationIcon className="size-11" />}
          title="การศึกษา"
        >
          {data.education.map((item) => (
            <TimelineItem key={`${item.period}-${item.school}`} period={item.period}>
              <p className="text-sm font-semibold">{item.school}</p>
              <p className="pl-1 text-sm">{item.program}</p>
            </TimelineItem>
          ))}
        </MainSection>

        <MainSection
          icon={<BriefcaseIcon className="size-11" />}
          title="ประสบการณ์"
        >
          {data.experience.map((item) => (
            <TimelineItem key={`${item.period}-${item.company}`} period={item.period}>
              <p className="text-sm font-semibold">{item.role}</p>
              <p className="pl-1 text-sm">{item.company}</p>
              {item.details.length > 0 && (
                <ul className="mt-1.5 space-y-0.5 pl-9 text-[15px]">
                  {item.details.map((detail) => (
                    <li key={detail} className="list-disc">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </TimelineItem>
          ))}
        </MainSection>
      </main>
    </article>
  );
}

function SideSection({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-4 text-2xl font-semibold">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
}

function ContactRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 shrink-0">{icon}</span>
      <span className="min-w-0 leading-7">{children}</span>
    </li>
  );
}

function MainSection({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-4">
      <h2 className="mb-2 flex items-center gap-5 text-[34px] font-bold">
        {icon}
        {title}
      </h2>
      <ol className="space-y-1.5 pl-2">{children}</ol>
    </section>
  );
}

/** One entry with the vertical line and the dots at each end. */
function TimelineItem({
  period,
  children,
}: {
  period: string;
  children: ReactNode;
}) {
  return (
    <li className="relative pb-2.5 pl-9">
      <span className="absolute top-3 bottom-0 left-[5px] w-[3px] bg-[#5c5c5c]" />
      <span className="absolute top-2 left-[2px] size-[9px] rounded-full bg-[#5c5c5c]" />
      <span className="absolute bottom-[-4px] left-[2px] size-[9px] rounded-full bg-[#5c5c5c]" />
      <h3 className="text-[22px] font-bold">({period})</h3>
      {children}
    </li>
  );
}
