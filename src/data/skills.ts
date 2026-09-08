export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "API & Testing" | "Database" | "Full Stack";
  icon: string;
  level?: string;
};

export const skills: Skill[] = [
  { name: "HTML", category: "Frontend", icon: "HTML" },
  { name: "CSS", category: "Frontend", icon: "CSS" },
  { name: "JavaScript", category: "Frontend", icon: "JS" },
  { name: "React", category: "Frontend", icon: "RE" },
  { name: "Angular", category: "Frontend", icon: "NG" },
  { name: "Java", category: "Backend", icon: "JV" },
  { name: "Spring Boot", category: "Backend", icon: "SB" },
  { name: ".NET", category: "Backend", icon: "NET" },
  { name: "C#", category: "Backend", icon: "C#" },
  { name: "REST API", category: "API & Testing", icon: "API" },
  { name: "Swagger", category: "API & Testing", icon: "SW" },
  { name: "Postman", category: "API & Testing", icon: "PM" },
  { name: "Microsoft SQL Server", category: "Database", icon: "MSS" },
  { name: "SQL", category: "Database", icon: "DB" },
  { name: "Java Full Stack Development", category: "Full Stack", icon: "JF" },
  { name: ".NET Full Stack Development", category: "Full Stack", icon: "NF" },
];
