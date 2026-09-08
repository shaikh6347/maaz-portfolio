"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays, Award } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { Section } from "@/components/Section";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Timeline / 04"
      title="The journey is data-driven."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_.75fr]">
        {/* Experience Timeline */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d8b46a]" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/35">
              Experience
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-[15px] top-2 w-px bg-gradient-to-b from-[#d8b46a]/50 via-white/10 to-transparent"
            />

            <div className="space-y-7">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.year}-${index}`}
                  variants={itemVariants}
                  className="group relative pl-12"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute left-[7px] top-6 z-10 grid h-[17px] w-[17px] place-items-center rounded-full border border-[#d8b46a]/40 bg-[#0a0a0a] transition-all duration-300 group-hover:border-[#d8b46a] group-hover:shadow-[0_0_18px_rgba(216,180,106,.3)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d8b46a]" />
                  </motion.div>

                  {/* Card glow */}
                  <div className="absolute -inset-px rounded-[24px] bg-gradient-to-br from-[#d8b46a]/20 via-transparent to-transparent opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 5, y: -3 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-[#d8b46a]/20 group-hover:bg-white/[0.04]"
                  >
                    {/* Decorative number */}
                    <div className="pointer-events-none absolute right-5 top-4 font-mono text-4xl font-bold text-white/[0.025]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Year */}
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={13}
                        className="text-[#d8b46a]/70"
                      />

                      <span className="text-xs uppercase tracking-[0.2em] text-[#d8b46a]">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-xl font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <div className="mt-2 flex items-center gap-2 text-sm text-white/40">
                      <MapPin size={13} className="text-white/25" />
                      {item.organization}
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/60">
                      {item.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-px flex-1 bg-white/[0.06]" />

                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-[#d8b46a]/50">
                        Milestone
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d8b46a]" />

            <span className="text-xs uppercase tracking-[0.25em] text-white/35">
              Education
            </span>
          </div>

          {/* Education Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[30px]"
          >
            {/* Glow */}
            <div className="absolute -inset-px rounded-[30px] bg-gradient-to-br from-[#d8b46a]/30 via-transparent to-transparent opacity-40 blur-md transition duration-500 group-hover:opacity-80" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d8b46a]/10 blur-3xl" />

              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage:
                    "linear-gradient(to bottom right, black, transparent 65%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom right, black, transparent 65%)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.08,
                  }}
                  className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8b46a]/20 bg-[#d8b46a]/[0.07] text-[#f0d9a3] shadow-[inset_0_1px_0_rgba(255,255,255,.08)]"
                >
                  <GraduationCap size={25} strokeWidth={1.5} />
                </motion.div>

                {/* Label */}
                <p className="mt-7 text-[10px] uppercase tracking-[0.25em] text-[#d8b46a]">
                  Academic Background
                </p>

                {/* Degree */}
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white/90">
                  {education.degree}
                </h3>

                {/* College */}
                <p className="mt-4 text-sm leading-6 text-white/50">
                  {education.college}
                </p>

                <div className="mt-2 text-sm text-white/35">
                  {education.university}
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-white/[0.07]" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 group-hover:border-[#d8b46a]/10">
                    <div className="flex items-center gap-2 text-white/25">
                      <CalendarDays size={13} />
                      <span className="text-[10px] uppercase tracking-[0.15em]">
                        Year
                      </span>
                    </div>

                    <div className="mt-2 text-sm font-medium text-white/70">
                      {education.year}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 group-hover:border-[#d8b46a]/10">
                    <div className="flex items-center gap-2 text-white/25">
                      <Award size={13} />
                      <span className="text-[10px] uppercase tracking-[0.15em]">
                        CGPA
                      </span>
                    </div>

                    <div className="mt-2 text-sm font-medium text-white/70">
                      {education.cgpa}
                    </div>
                  </div>
                </div>

                {/* Percentage */}
                <div className="mt-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 group-hover:border-[#d8b46a]/15 group-hover:bg-[#d8b46a]/[0.025]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                      Percentage
                    </span>

                    <span className="text-sm font-medium text-[#f0d9a3]">
                      {education.percentage}
                    </span>
                  </div>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#d8b46a]/40 to-[#f0d9a3]"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/20">
                  <span>Education</span>
                  <span>01</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}