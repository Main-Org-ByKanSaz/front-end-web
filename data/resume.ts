// ข้อมูลเรซูเม่ทั้งหมดอยู่ในไฟล์นี้ แก้ไขที่นี่ที่เดียว หน้าเว็บจะเปลี่ยนตาม
// เพิ่มหรือลบรายการในแต่ละ list ได้ตามต้องการ

export interface Education {
  period: string;
  school: string;
  program: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  details: string[];
}

export interface Resume {
  firstName: string;
  lastName: string;
  title: string;
  photo: {
    src: string;
    /** ขยายรูปในวงกลม (1 = ไม่ขยาย) */
    zoom?: number;
    /** จุดที่ต้องการให้อยู่กลางวงกลม เช่น "50% 70%" */
    focus?: string;
  };
  about: string[];
  contact: {
    phone: string;
    email: string;
    github: string;
    address: string[];
  };
  skills: string[];
  education: Education[];
  experience: Experience[];
}

export const resume: Resume = {
  firstName: "กานต์",
  lastName: "ซึมเมฆ",
  title: "นักพัฒนาเว็บไซต์ (Web Developer)",
  photo: { src: "/resume/profile.jpg", zoom: 2.1, focus: "50% 82%" },
  about: [
    "นักพัฒนาเว็บรุ่นใหม่ที่มีความถนัดในการทำ REST API, NestJs, TypeScript, Docker, AWS, NodeJs, HTML, CSS, JavaScript, Git Hub",
    "มีประสบการณ์การทำงาน Backend Developer ในบริษัท Software House 2 ปี",
  ],
  contact: {
    phone: "0803794541",
    email: "kanz.kingz@gmail.com",
    github: "github.com/Main-Org-ByKanSaz",
    address: ["101 หมู่ที่ 11 ต.ปทุม", "อ.เมืองอุบลราชธานี", "จ.อุบลราชธานี 34000"],
  },
  skills: [
    "IT Support",
    "NestJS",
    "Docker",
    "AWS",
    "Type Script",
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJs",
  ],
  education: [
    {
      period: "2014 - 2016",
      school: "วิทยาลัยเทคนิคอุบลราชธานี",
      program: "เทคนิคคอมพิวเตอร์",
    },
    {
      period: "2017 - 2018",
      school: "วิทยาลัยอาชีวศึกษาอุบลราชธานี",
      program: "คอมพิวเตอร์ธุรกิจ",
    },
    {
      period: "2019 - 2020",
      school: "มหาวิทยาลัยอุบลราชธานี",
      program: "เทคโนโลยีสารสนเทศ",
    },
  ],
  experience: [
    {
      period: "2019 - 2020",
      role: "การสนับสนุนด้านเทคโนโลยีสารสนเทศ",
      company: "Joint space UBU",
      details: ["จัดการดูแลอุปกรณ์ด้าน IT ในห้องประชุม", "ดูแลการจองห้องประชุม"],
    },
    {
      period: "2023",
      role: "การสนับสนุนด้านเทคโนโลยีสารสนเทศ",
      company: "บริษัท ครัวนภัส ผลิตภัณฑ์อาหาร จำกัด",
      details: [
        "ช่วยดูแลการทำงานทางด้าน IT ของเซลล์ที่ออกขายหน้างาน",
        "ดูแลเว็บจัดการข้อมูลภายในองค์กร",
      ],
    },
    {
      period: "2023 - 2025",
      role: "BACK END DEVELOPER",
      company: "บริษัท เฮล แฟคตอรี่ จำกัด",
      details: ["ทำ REST API ด้วย NestJs", "Support และดูแลลูกค้า"],
    },
  ],
};
