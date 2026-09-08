"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Section } from "@/components/Section";

const categories = [
  "Frontend",
  "Backend",
  "API & Testing",
  "Database",
  "Full Stack",
] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities / 02"
      title="A focused technology stack."
    >
      <div className="space-y-16">
        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category
          );

          if (!categorySkills.length) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Category heading */}
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#d8b46a]" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8b46a]/70">
                      0{categoryIndex + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-white/50">
                    {category}
                  </h3>
                </div>

                <span className="hidden text-xs text-white/20 sm:block">
                  {String(categorySkills.length).padStart(2, "0")}{" "}
                  technologies
                </span>
              </div>

              {/* Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.06,
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative"
                  >
                    {/* Outer glow */}
                    <div className="absolute -inset-px rounded-[22px] bg-gradient-to-br from-[#d8b46a]/0 via-[#d8b46a]/0 to-[#d8b46a]/0 opacity-0 blur-md transition duration-500 group-hover:from-[#d8b46a]/30 group-hover:via-[#d8b46a]/10 group-hover:to-transparent group-hover:opacity-100" />

                    {/* Card */}
                    <div className="relative min-h-[150px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-[#d8b46a]/25 group-hover:bg-white/[0.045]">
                      {/* Decorative grid */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(216,180,106,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(216,180,106,0.05) 1px, transparent 1px)",
                          backgroundSize: "18px 18px",
                          maskImage:
                            "linear-gradient(to bottom right, black, transparent 70%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom right, black, transparent 70%)",
                        }}
                      />

                      {/* Top-right index */}
                      <div className="absolute right-4 top-4 text-[10px] font-mono text-white/15 transition-colors group-hover:text-[#d8b46a]/40">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Spotlight */}
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#d8b46a]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-[#d8b46a]/20 blur-lg opacity-0 transition duration-500 group-hover:opacity-100" />

                            <motion.div
                              whileHover={{
                                rotate: 8,
                                scale: 1.08,
                              }}
                              className="relative grid h-12 w-12 place-items-center rounded-2xl border border-[#d8b46a]/20 bg-gradient-to-br from-[#d8b46a]/10 to-transparent text-xs font-semibold text-[#f0d9a3] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                            >
                              {skill.icon}
                            </motion.div>
                          </div>

                          {/* Name */}
                          <div className="min-w-0 pt-1">
                            <div className="truncate pr-5 text-[15px] font-medium text-white/90 transition-colors group-hover:text-white">
                              {skill.name}
                            </div>

                            {skill.level && (
                              <div className="mt-1 text-xs text-white/30">
                                {skill.level}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="mt-8 flex items-center gap-3">
                          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: skill.level
                                  ? skill.level.toLowerCase().includes("advanced")
                                    ? "90%"
                                    : skill.level
                                        .toLowerCase()
                                        .includes("intermediate")
                                    ? "70%"
                                    : "50%"
                                  : "65%",
                              }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.2 + i * 0.05,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-[#d8b46a]/40 to-[#f0d9a3]"
                            />
                          </div>

                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 transition-colors group-hover:text-[#d8b46a]/50">
                            Stack
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
