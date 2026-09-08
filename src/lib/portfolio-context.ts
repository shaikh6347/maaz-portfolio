import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export function getPortfolioContext() {
  return JSON.stringify(
    {
      profile,
      skills,
      projects,
      certificates,
      experience,
      education,
    },
    null,
    2,
  );
}
