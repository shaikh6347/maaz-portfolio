import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

const unknown =
  profile.aiFallback ||
  "I don't have that information in Maaz's portfolio yet.";

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[?.!,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasAny(text: string, values: string[]) {
  return values.some((value) => text.includes(value));
}

function getSkillNames(category?: string) {
  return skills
    .filter((skill) => !category || skill.category === category)
    .map((skill) => skill.name);
}

function findProject(question: string) {
  return projects.find((project) => {
    const name = normalize(project.name);

    if (question.includes(name)) {
      return true;
    }

    const aliases: Record<string, string[]> = {
      "dj pearls beed": [
        "dj pearls",
        "dj pearl",
        "dj project",
        "event management",
      ],

      "fee record management system": [
        "fees management",
        "fee management",
        "fees project",
        "fee project",
      ],

      "college leaving certificate system": [
        "college record",
        "college project",
        "leaving certificate",
        "certificate system",
      ],

      "rsapp (ride sharing application)": [
        "rsapp",
        "ride sharing",
        "ride sharing app",
        "ride app",
      ],
    };

    return aliases[project.name.toLowerCase()]?.some((alias) =>
      question.includes(alias),
    );
  });
}

function formatProject(project: (typeof projects)[number]) {
  return [
    `${project.name}`,
    "",
    project.description,
    "",
    `Technologies: ${project.technologies.join(", ")}.`,
    `Frontend: ${project.frontend}`,
    `Backend: ${project.backend}`,
    `Database: ${project.database}`,
    "",
    `Architecture: ${project.details.architecture}`,
    "",
    `Key features: ${project.details.features.join(", ")}.`,
  ].join("\n");
}

export function fallbackAnswer(question: string): string {
  const q = normalize(question);

  if (!q) {
    return "Please ask me something about Maaz's portfolio.";
  }

  // ==================================================
  // AI PORTFOLIO / HOW THIS PORTFOLIO WORKS
  // ==================================================

  if (
    hasAny(q, [
      "ai portfolio",
      "ai powered portfolio",
      "ai-powered portfolio",
      "portfolio with ai",
      "portfolio using ai",
      "ai portfolio kaise",
      "ai me portfolio kaise",
      "ai se portfolio kaise",
      "ai portfolio kaise bana",
      "ai portfolio kaise banaya",
      "how is this portfolio made",
      "how was this portfolio made",
      "how did he build this portfolio",
      "how did maaz build this portfolio",
      "how was this ai portfolio built",
      "how to build an ai portfolio",
      "how can i build an ai portfolio",
      "how to make ai portfolio",
      "how can i make ai portfolio",
    ])
  ) {
    return [
      "This portfolio is designed as a modern full-stack web application with an AI-powered portfolio assistant.",
      "",
      "The portfolio combines a frontend interface, server-side API routes, structured portfolio data, and an AI/fallback response system.",
      "",
      "The AI assistant can answer questions about Maaz's profile, skills, projects, experience, education, certificates, resume, and contact information.",
      "",
      "When the OpenAI service is available, the portfolio can use the configured AI model. If the AI service is unavailable or has no available credits, the local fallback AI uses Maaz's portfolio data to continue answering supported questions.",
    ].join("\n");
  }

  // ==================================================
  // HOW DOES MAAZ AI WORK?
  // ==================================================

  if (
    hasAny(q, [
      "how does maaz ai work",
      "how does the ai work",
      "how does this ai work",
      "how does portfolio ai work",
      "how does the portfolio ai work",
      "how does the assistant work",
      "how does ai assistant work",
      "how is maaz ai working",
      "how is the ai connected",
      "how is ai connected to portfolio",
      "how is the ai integrated",
      "ai integration",
      "ai integration in portfolio",
    ])
  ) {
    return [
      "Maaz AI works as a portfolio knowledge assistant.",
      "",
      "1. A visitor asks a question in the AI chat.",
      "2. The question is sent to the portfolio's /api/ai server route.",
      "3. The server has access to structured portfolio data such as profile, skills, projects, certificates, experience, and education.",
      "4. When the OpenAI service is available, the server can send the portfolio context to the AI model.",
      "5. If OpenAI is unavailable, rate-limited, or out of credits, the local fallback AI answers using the same portfolio data.",
      "",
      "This approach allows the portfolio assistant to remain useful even when the external AI service is unavailable.",
    ].join("\n");
  }

  // ==================================================
  // IS THIS REALLY AI?
  // ==================================================

  if (
    hasAny(q, [
      "is this really ai",
      "is maaz ai really ai",
      "is this portfolio really ai",
      "is this an ai portfolio",
      "is this ai powered",
      "is this ai-powered",
      "does this portfolio use ai",
      "does maaz ai use ai",
      "is maaz ai an ai",
    ])
  ) {
    return [
      "Yes. The portfolio is designed with an AI assistant integration.",
      "",
      "It can use an AI model through a server-side API route and provide portfolio-specific context to answer visitor questions.",
      "",
      "The portfolio also includes a local fallback knowledge system. This means supported portfolio questions can still receive answers when the external AI service is unavailable.",
    ].join("\n");
  }

  // ==================================================
  // TECHNOLOGIES USED FOR THIS PORTFOLIO
  // ==================================================

  if (
    hasAny(q, [
      "technology used for this portfolio",
      "technologies used for this portfolio",
      "tech used for this portfolio",
      "tech stack of this portfolio",
      "portfolio tech stack",
      "portfolio technologies",
      "what technology built this portfolio",
      "what technologies built this portfolio",
      "what technologies are used in this portfolio",
      "which technologies are used in this portfolio",
      "which tech is used in this portfolio",
      "what is this portfolio built with",
      "what is the portfolio built with",
    ])
  ) {
    return [
      "The portfolio is built around a modern full-stack web architecture.",
      "",
      "Frontend: Next.js, React, TypeScript, and Tailwind CSS.",
      "AI: OpenAI integration with a local portfolio-aware fallback system.",
      "Backend: Next.js server-side API routes.",
      "Portfolio data: Structured TypeScript data modules for profile, projects, skills, certificates, experience, and education.",
      "Notifications: Server-side email notification integration is used for portfolio inquiries.",
    ].join("\n");
  }

  // ==================================================
  // WHY NEXT.JS?
  // ==================================================

  if (
    hasAny(q, [
      "why next js",
      "why nextjs",
      "why use next js",
      "why use nextjs",
      "why was next js used",
      "why next js for portfolio",
      "why nextjs for portfolio",
      "next js benefits",
      "nextjs benefits",
    ])
  ) {
    return [
      "Next.js is a strong choice for this portfolio because it supports both modern frontend development and server-side functionality in one application.",
      "",
      "It allows the portfolio to combine React-based UI with server-side API routes, making it suitable for features such as the AI assistant and contact notifications.",
      "",
      "It also provides a clean structure for building a fast, scalable and production-oriented portfolio.",
    ].join("\n");
  }

  // ==================================================
  // BACKEND / API ARCHITECTURE
  // ==================================================

  if (
    hasAny(q, [
      "portfolio backend",
      "backend of portfolio",
      "portfolio backend architecture",
      "portfolio api architecture",
      "how is the backend built",
      "how is backend built",
      "what is the backend architecture",
      "what backend does this portfolio use",
      "how does the api work",
      "portfolio api",
      "api route",
      "api routes",
    ])
  ) {
    return [
      "The portfolio uses Next.js server-side API routes for backend functionality.",
      "",
      "The AI assistant communicates with the /api/ai route, where the server processes the visitor's question and accesses the portfolio knowledge.",
      "",
      "The contact functionality uses a server-side API route for inquiry processing and notification handling.",
      "",
      "Keeping these operations server-side also helps prevent sensitive API credentials from being exposed to the browser.",
    ].join("\n");
  }

  // ==================================================
  // LOCAL FALLBACK AI
  // ==================================================

  if (
    hasAny(q, [
      "what is fallback ai",
      "what is local ai",
      "what is local fallback",
      "what is fallback",
      "how does fallback ai work",
      "how does local ai work",
      "fallback ai work",
      "does ai work without credits",
      "can ai work without credits",
      "can maaz ai work without openai",
      "can maaz ai work without credits",
      "what happens if openai is unavailable",
      "what happens when openai fails",
      "what happens if ai service fails",
    ])
  ) {
    return [
      "The portfolio includes a local fallback AI system.",
      "",
      "It uses structured portfolio data and predefined question-matching logic to answer supported questions about Maaz.",
      "",
      "This means the portfolio can continue answering many common questions even when the external OpenAI service is unavailable, rate-limited, or out of credits.",
      "",
      "The fallback system can handle topics such as identity, skills, technologies, projects, experience, education, certificates, resume, contact, hiring, and the AI portfolio architecture.",
    ].join("\n");
  }

  // ==================================================
  // IDENTITY
  // ==================================================

  if (
    hasAny(q, [
      "who is maaz",
      "who s maaz",
      "who is maaz shaikh",
      "about maaz",
      "tell me about maaz",
      "tell me about maaz shaikh",
      "introduce maaz",
      "introduce maaz shaikh",
      "what does maaz do",
      "what does maaz work as",
      "what is maaz",
    ])
  ) {
    return `${profile.name} is a ${profile.title}. ${profile.bio}`;
  }

  // ==================================================
  // PROFESSIONAL ROLE
  // ==================================================

  if (
    hasAny(q, [
      "job title",
      "professional identity",
      "profession",
      "role",
      "designation",
      "what is his role",
      "what does he do",
      "developer",
      "full stack developer",
      "java developer",
    ])
  ) {
    return `${profile.name} is a ${profile.professionalIdentity}. His primary professional focus is full-stack application development using Java, Spring Boot, React, Angular, .NET, APIs, and databases.`;
  }

  // ==================================================
  // TAGLINE / SUMMARY
  // ==================================================

  if (
    hasAny(q, [
      "summary",
      "profile summary",
      "professional summary",
      "tagline",
      "about his profile",
      "describe maaz",
    ])
  ) {
    return profile.bio;
  }

  // ==================================================
  // SPECIFIC PROJECT
  // ==================================================

  const project = findProject(q);

  if (project) {
    return formatProject(project);
  }

  // ==================================================
  // ALL PROJECTS
  // ==================================================

  if (
    hasAny(q, [
      "projects",
      "project",
      "portfolio projects",
      "what has he built",
      "what did he build",
      "what applications",
      "applications he built",
      "projects he built",
      "show me his projects",
      "tell me about his projects",
    ])
  ) {
    if (!projects.length) {
      return unknown;
    }

    return [
      `${profile.name}'s portfolio currently includes:`,
      "",
      ...projects.map(
        (item, index) =>
          `${index + 1}. ${item.name} — ${item.description}`,
      ),
    ].join("\n");
  }

  // ==================================================
  // PROJECT TECHNOLOGIES
  // ==================================================

  if (
    hasAny(q, [
      "project technologies",
      "technologies used in projects",
      "what technologies did he use in projects",
      "technology used in his projects",
    ])
  ) {
    const technologies = Array.from(
      new Set(projects.flatMap((project) => project.technologies)),
    );

    return `Across his listed projects, Maaz has worked with ${technologies.join(", ")}.`;
  }

  // ==================================================
  // EXPERIENCE
  // ==================================================

  if (
    hasAny(q, [
      "experience",
      "work experience",
      "professional experience",
      "career",
      "career journey",
      "work history",
      "his journey",
      "developer journey",
      "where has he worked",
      "what is his experience",
    ])
  ) {
    if (!experience.length) {
      return unknown;
    }

    return [
      `${profile.name}'s development journey:`,
      "",
      ...experience.map(
        (item) =>
          `${item.year} — ${item.title} at ${item.organization}\n${item.description}`,
      ),
    ].join("\n\n");
  }

  // ==================================================
  // EDUCATION
  // ==================================================

  if (
    hasAny(q, [
      "education",
      "degree",
      "college",
      "university",
      "graduation",
      "graduate",
      "cgpa",
      "cgpi",
      "percentage",
      "academic background",
      "what did maaz study",
      "where did maaz study",
    ])
  ) {
    return [
      `${profile.name}'s education:`,
      "",
      `Degree: ${education.degree}`,
      `College: ${education.college}`,
      `University: ${education.university}`,
      `Year: ${education.year}`,
      `CGPI: ${education.cgpa}`,
      `Percentage: ${education.percentage}`,
      "",
      `Achievements: ${education.achievements.join("; ")}.`,
    ].join("\n");
  }

  // ==================================================
  // FRONTEND
  // ==================================================

  if (
    hasAny(q, [
      "frontend",
      "front end",
      "frontend technologies",
      "frontend skills",
      "ui technologies",
      "client side",
    ])
  ) {
    const frontend = getSkillNames("Frontend");

    return `Maaz's listed frontend technologies include ${frontend.join(", ")}.`;
  }

  // ==================================================
  // BACKEND
  // ==================================================

  if (
    hasAny(q, [
      "backend",
      "back end",
      "backend technologies",
      "backend skills",
      "server side",
    ])
  ) {
    const backend = getSkillNames("Backend");

    return `Maaz's listed backend technologies include ${backend.join(", ")}.`;
  }

  // ==================================================
  // DATABASE
  // ==================================================

  if (
    hasAny(q, [
      "database",
      "databases",
      "database skills",
      "what database",
      "sql",
      "mysql",
      "sql server",
      "mssql",
    ])
  ) {
    const database = getSkillNames("Database");

    return `Maaz's listed database technologies include ${database.join(", ")}.`;
  }

  // ==================================================
  // API / TESTING
  // ==================================================

  if (
    hasAny(q, [
      "api",
      "apis",
      "rest api",
      "rest apis",
      "swagger",
      "postman",
      "api testing",
      "testing tools",
    ])
  ) {
    const apiSkills = getSkillNames("API & Testing");

    return `Maaz's listed API and testing technologies include ${apiSkills.join(", ")}.`;
  }

  // ==================================================
  // SPRING BOOT
  // ==================================================

  if (
    hasAny(q, [
      "spring boot",
      "springboot",
      "spring data",
      "spring data jpa",
    ])
  ) {
    return "Yes. Spring Boot is listed in Maaz's backend skills, and he has used Spring Boot with Spring Data JPA, REST APIs, and MySQL in the Fee Record Management System.";
  }

  // ==================================================
  // JAVA
  // ==================================================

  if (
    hasAny(q, [
      "java",
      "java developer",
      "java development",
      "java backend",
      "servlet",
      "servlets",
      "jdbc",
    ])
  ) {
    return "Yes. Java is one of Maaz's core backend technologies. His portfolio includes Java, Java Servlets, JDBC, Spring Boot, Spring Data JPA, REST APIs, and MySQL.";
  }

  // ==================================================
  // REACT
  // ==================================================

  if (
    hasAny(q, [
      "react",
      "react js",
      "reactjs",
      "react developer",
    ])
  ) {
    return "Yes. React is listed among Maaz's frontend skills. He has also used React in projects such as DJ Pearls Beed and RSAPP.";
  }

  // ==================================================
  // ANGULAR
  // ==================================================

  if (
    hasAny(q, [
      "angular",
      "angular js",
      "angularjs",
      "angular developer",
    ])
  ) {
    return "Yes. Angular is listed among Maaz's frontend skills.";
  }

  // ==================================================
  // .NET / C#
  // ==================================================

  if (
    hasAny(q, [
      ".net",
      "dotnet",
      "c#",
      "c sharp",
      "csharp",
      "asp.net",
      "asp net",
    ])
  ) {
    return "Yes. .NET and C# are listed in Maaz's backend skills. He has used C#/.NET and REST APIs in projects including DJ Pearls Beed and RSAPP.";
  }

  // ==================================================
  // JAVASCRIPT / HTML / CSS
  // ==================================================

  if (
    hasAny(q, [
      "javascript",
      "java script",
      "html",
      "css",
      "web development",
    ])
  ) {
    const webSkills = skills
      .filter((skill) =>
        ["HTML", "CSS", "JavaScript"].includes(skill.name),
      )
      .map((skill) => skill.name);

    return `Maaz's listed web development skills include ${webSkills.join(", ")}.`;
  }

  // ==================================================
  // FULL SKILL LIST
  // ==================================================

  if (
    hasAny(q, [
      "skills",
      "skill",
      "technologies",
      "technology",
      "tech stack",
      "techstack",
      "technical skills",
      "what can maaz do",
      "what does maaz know",
      "what technologies does maaz know",
    ])
  ) {
    return [
      `${profile.name}'s listed technical skills include:`,
      "",
      ...skills.map(
        (skill) => `• ${skill.name} — ${skill.category}`,
      ),
    ].join("\n");
  }

  // ==================================================
  // FULL STACK
  // ==================================================

  if (
    hasAny(q, [
      "full stack",
      "fullstack",
      "full stack development",
      "full stack developer",
    ])
  ) {
    return `${profile.name} is a ${profile.title}. His listed full-stack capabilities cover Java, Spring Boot, React, Angular, .NET, C#, REST APIs, SQL databases, and end-to-end application development.`;
  }

  // ==================================================
  // CERTIFICATE RESULT
  // IMPORTANT: This comes BEFORE generic certificates.
  // ==================================================

  if (
    hasAny(q, [
      "certificate marks",
      "certificate result",
      "certificate marks",
      "marks in certificate",
      "marks in web developer certificate",
      "web developer certificate marks",
      "web developer result",
      "certificate percentage",
      "certificate grade",
      "certificate score",
      "how many marks",
      "how much marks",
      "marks obtained",
      "marks obtained in certificate",
      "certificate total marks",
    ])
  ) {
    const certificate = certificates[0];

    if (!certificate?.result) {
      return unknown;
    }

    return [
      `Maaz's Web Developer certificate result:`,
      "",
      `Obtained Marks: ${certificate.result.obtainedMarks}/${certificate.result.totalMarks}`,
      `Percentage: ${certificate.result.percentage}%`,
      `Grade: ${certificate.result.grade}`,
      `Place: ${certificate.result.place}`,
    ].join("\n");
  }

  // ==================================================
  // CERTIFICATES
  // ==================================================

  if (
    hasAny(q, [
      "certificate",
      "certificates",
      "certification",
      "certifications",
      "credentials",
      "qualification",
    ])
  ) {
    if (!certificates.length) {
      return unknown;
    }

    return [
      `${profile.name} has ${certificates.length} certificate listed in the portfolio:`,
      "",
      ...certificates.map(
        (certificate) =>
          `${certificate.title}\nIssuer: ${certificate.issuer}\nDate: ${certificate.date}\nResult: ${certificate.result?.percentage ?? "N/A"}% — ${certificate.result?.grade ?? "N/A"}`,
      ),
    ].join("\n\n");
  }

  // ==================================================
  // CONTACT
  // ==================================================

  if (
    hasAny(q, [
      "contact",
      "contact maaz",
      "contact him",
      "reach maaz",
      "reach him",
      "how can i contact",
      "how do i contact",
      "email",
      "email address",
      "mail",
      "get in touch",
    ])
  ) {
    return `You can contact ${profile.name} through the Contact / Inquiry section of this portfolio. His listed email is ${profile.email}.`;
  }

  // ==================================================
  // HIRING / FREELANCE
  // ==================================================

  if (
    hasAny(q, [
      "hire",
      "hire maaz",
      "hire him",
      "hiring",
      "freelance",
      "freelancing",
      "work with maaz",
      "work with him",
      "available",
      "job opportunity",
      "job opportunities",
      "freelance project",
      "can i hire",
      "can we hire",
    ])
  ) {
    return `${profile.name} is available for opportunities. For hiring, freelance projects, collaborations, internships, or other inquiries, use the Contact / Inquiry section of the portfolio.`;
  }

  // ==================================================
  // RESUME
  // ==================================================

  if (
    hasAny(q, [
      "resume",
      "cv",
      "curriculum vitae",
      "download resume",
      "maaz resume",
    ])
  ) {
    return `${profile.name}'s resume is available through the Resume section of the portfolio.`;
  }

  // ==================================================
  // LOCATION
  // ==================================================

  if (
    hasAny(q, [
      "location",
      "where is maaz",
      "where does maaz live",
      "where is he from",
      "city",
    ])
  ) {
    return `${profile.name}'s portfolio lists his location as ${profile.location}.`;
  }

  // ==================================================
  // GITHUB
  // ==================================================

  if (
    hasAny(q, [
      "github",
      "github profile",
      "github account",
      "github username",
      "source code",
    ])
  ) {
    return `${profile.name}'s GitHub username is ${profile.githubUsername}. His GitHub profile is available through the GitHub link in the portfolio.`;
  }

  // ==================================================
  // GENERAL GREETING
  // ==================================================

  if (
    hasAny(q, [
      "hello",
      "hi",
      "hey",
      "hii",
      "good morning",
      "good afternoon",
      "good evening",
    ])
  ) {
    return `Hi! I'm Maaz AI. I can tell you about ${profile.name}'s skills, projects, experience, education, certificates, resume, contact information, and how this AI portfolio works. What would you like to know?`;
  }

  // ==================================================
  // UNKNOWN
  // ==================================================

  return unknown;
}