"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Section } from "@/components/Section";

const filters = [
  "All",
  "Java",
  "Spring Boot",
  "React",
  "Angular",
  ".NET",
  "Full Stack",
  "API",
];

function usable(value: string) {
  return value && !value.startsWith("YOUR_");
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: {
      duration: 0.25,
    },
  },
};

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter(
            (p) =>
              p.categories.includes(filter) ||
              p.technologies.includes(filter)
          ),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected work / 03"
      title="Projects, without invented stories."
    >
      {/* ================= FILTER NAVIGATION ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((item) => {
          const active = filter === item;

          return (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className="relative rounded-full border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors duration-300 hover:border-white/20 hover:text-white"
            >
              {active && (
                <motion.span
                  layoutId="active-project-filter"
                  className="absolute inset-0 rounded-full border border-[#d8b46a]/40 bg-[#d8b46a]/10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`relative z-10 ${
                  active ? "text-[#f0d9a3]" : ""
                }`}
              >
                {item}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* ================= PROJECT GRID ================= */}

      <AnimatePresence mode="popLayout">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-5 lg:grid-cols-2"
        >
          {visible.map((project) => (
            <motion.article
              layout
              key={project.id}
              variants={cardVariants}
              exit="exit"
              whileHover={{
                y: -8,
              }}
              transition={{
                layout: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              }}
              className="group relative overflow-hidden rounded-[28px]"
            >
              {/* Hover glow */}

              <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-[#d8b46a]/30 via-transparent to-transparent opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

              {/* Main card */}

              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 group-hover:border-[#d8b46a]/20 group-hover:bg-white/[0.04]">
                {/* ================= IMAGE ================= */}

                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-white/5 to-black">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    initial={{
                      scale: 1.02,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-55"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Decorative grid */}

                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Project number */}

                  <div className="absolute left-5 top-5 font-mono text-xs text-white/30">
                    #{String(project.id).padStart(2, "0")}
                  </div>

                  {/* Arrow */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -8,
                      y: 8,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                    className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md"
                  >
                    <ArrowUpRight size={17} />
                  </motion.div>

                  {/* Project name */}

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <motion.div
                      className="text-3xl font-semibold tracking-tight text-white/90"
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {project.name}
                    </motion.div>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-6">
                  {/* Categories */}

                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.25,
                        }}
                        className="rounded-full border border-white/[0.06] bg-white/[0.035] px-3 py-1 text-xs text-white/45 transition-colors duration-300 group-hover:border-[#d8b46a]/10 group-hover:text-white/60"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/55">
                    {usable(project.description)
                      ? project.description
                      : "Project details will appear here after the exact project information is added."}
                  </p>

                  {/* Technologies */}

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies
                      .slice(0, 5)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[#f0d9a3]/70 transition-colors duration-300 group-hover:text-[#f0d9a3]"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Divider */}

                  <div className="my-6 h-px bg-white/[0.06]" />

                  {/* Actions */}

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelected(project)}
                      className="group/button relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#f0d9a3]"
                    >
                      <span className="relative z-10">
                        View Details
                      </span>
                    </button>

                    <div className="flex gap-2">
                      {/* GitHub */}

                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{
                            scale: 1.1,
                            rotate: -5,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/50 transition-colors duration-300 hover:border-white/20 hover:text-white"
                          aria-label={`${project.name} GitHub`}
                        >
                          <Github size={17} />
                        </motion.a>
                      )}

                      {/* Live demo */}

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/50 transition-colors duration-300 hover:border-[#d8b46a]/30 hover:text-[#f0d9a3]"
                          aria-label={`${project.name} live demo`}
                        >
                          <ExternalLink size={17} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ================= EMPTY STATE ================= */}

      {visible.length === 0 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="rounded-3xl border border-dashed border-white/10 p-12 text-center"
        >
          <p className="text-sm text-white/35">
            No projects found for this category.
          </p>
        </motion.div>
      )}

      {/* ================= PROJECT MODAL ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelected(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="glass max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 p-7 shadow-2xl"
            >
              {/* Modal header */}

              <div className="flex items-start justify-between gap-5">
                <div>
                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                    className="text-xs uppercase tracking-[0.2em] text-[#d8b46a]"
                  >
                    Project detail
                  </motion.p>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="mt-2 text-3xl font-semibold"
                  >
                    {selected.name}
                  </motion.h3>
                </div>

                {/* Close button */}

                <motion.button
                  whileHover={{
                    rotate: 90,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => setSelected(null)}
                  aria-label="Close project"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/50 transition-colors hover:text-white"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Modal content */}

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},

                  show: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.15,
                    },
                  },
                }}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {[
                  ["Problem", selected.details.problem],
                  ["Solution", selected.details.solution],
                  [
                    "Architecture",
                    selected.details.architecture,
                  ],
                  [
                    "My contribution",
                    selected.details.contribution,
                  ],
                  [
                    "Challenges",
                    selected.details.challenges.join(", "),
                  ],
                  ["Results", selected.details.results],
                ].map(([label, value]) => (
                  <motion.div
                    key={label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 15,
                      },

                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1] as const,
                        },
                      },
                    }}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#d8b46a]/15 hover:bg-white/[0.035]"
                  >
                    <div className="text-xs uppercase tracking-[0.15em] text-white/30 transition-colors group-hover:text-[#d8b46a]/60">
                      {label}
                    </div>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {usable(value)
                        ? value
                        : "Not provided yet."}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
