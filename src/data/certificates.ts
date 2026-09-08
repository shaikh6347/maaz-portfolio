export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;

  result?: {
    totalMarks: number;
    obtainedMarks: number;
    percentage: number;
    grade: string;
    place: string;
    marksheetNo: string;
    candidateId: string;
    sector: string;
    jobRole: string;
    centreName: string;

    subjects: {
      name: string;
      code: string;
      maximumMarks: number;
      theory?: number;
      practical?: number;
      total: number;
      totalInWords: string;
    }[];
  };
};

export const certificates: Certificate[] = [
  {
    id: "certificate-web-developer-it028",

    title: "Certificate in Web Developer (IT028)",

    issuer: "National Association of Skill Development (NASD)",

    date: "05.02.2026",

    credentialId: "NASD/MH/2182",

    credentialUrl: "",

    image: "/certificates/Web_Developer_Certificate.jpeg",

    result: {
      totalMarks: 400,

      obtainedMarks: 334,

      percentage: 83.5,

      grade: "Outstanding",

      place: "Kalyan",

      marksheetNo: "NASD/MH/2074",

      candidateId: "NASD/UW/MKAL/IT028/B3019",

      sector: "INFORMATION TECHNOLOGY",

      jobRole: "CERTIFICATE IN WEB DEVELOPER (IT028)",

      centreName:
        "UNITED WAY OF MUMBAI - MHI/KAL/NASD/ATC1031",

      subjects: [
        {
          name: "WEB DEVELOPER (THEORY)",
          code: "IT028/01",
          maximumMarks: 100,
          theory: 82,
          total: 82,
          totalInWords: "EIGHTY TWO",
        },

        {
          name: "WEB DEVELOPER (PRACTICAL)",
          code: "IT028/02",
          maximumMarks: 100,
          practical: 80,
          total: 80,
          totalInWords: "EIGHTY",
        },

        {
          name: "SOFT SKILL",
          code: "SS/01",
          maximumMarks: 100,
          practical: 84,
          total: 84,
          totalInWords: "EIGHTY FOUR",
        },

        {
          name: "COMMUNICATION SKILL",
          code: "CS/01",
          maximumMarks: 100,
          practical: 88,
          total: 88,
          totalInWords: "EIGHTY EIGHT",
        },
      ],
    },
  },
];