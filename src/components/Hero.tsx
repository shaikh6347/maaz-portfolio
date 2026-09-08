"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight, 
  Bot,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ onAI }: { onAI: () => void }) {
  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main gold glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#d8b46a]/10 blur-[120px]"
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-[#6fe7ff]/10 blur-[120px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 grid w-full items-center gap-16 py-20 lg:grid-cols-[1.2fr_.8fr]">
        {/* ================= LEFT ================= */}

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease },
              },
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#d8b46a]" />

            <span className="text-xs uppercase tracking-[0.32em] text-[#d8b46a]">
              Digital identity / 01
            </span>

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8b46a] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8b46a]" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease,
                },
              },
            }}
            className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="text-gold">{profile.name}</span>

              {/* Name underline */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease,
                }}
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#d8b46a] to-transparent"
              />
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease },
              },
            }}
            className="mt-7 flex items-center gap-3"
          >
            <span className="h-8 w-[2px] bg-[#d8b46a]/60" />

            <p className="text-2xl font-medium text-white/80 sm:text-3xl">
              {profile.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease },
              },
            }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* ================= BUTTONS ================= */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease },
              },
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {/* Resume */}
            <motion.a
              href={profile.resume}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-[#f0d9a3] px-5 py-3 font-medium text-black shadow-[0_10px_40px_rgba(216,180,106,.12)] transition-shadow hover:shadow-[0_15px_50px_rgba(216,180,106,.25)]"
            >
              <Download size={17} />

              <span>Resume</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            {/* Projects */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
            >
              Explore Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Contact */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              <Mail size={16} />

              Contact
            </motion.a>

            {/* AI */}
            <motion.button
              onClick={onAI}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#6fe7ff]/20 bg-[#6fe7ff]/[0.05] px-5 py-3 text-[#b9f4ff] transition-all duration-300 hover:border-[#6fe7ff]/40 hover:bg-[#6fe7ff]/10"
            >
              <motion.span
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <Bot
                size={17}
                className="relative transition-transform duration-300 group-hover:rotate-12"
              />

              <span className="relative">Talk to My AI</span>

              <Sparkles
                size={13}
                className="relative opacity-50 transition-opacity group-hover:opacity-100"
              />
            </motion.button>
          </motion.div>

          {/* Explore */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
            className="mt-14 inline-flex items-center gap-3 text-sm text-white/35 transition-colors hover:text-white/70"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10">
              <ArrowDown size={14} />
            </span>

            <span>Explore identity</span>
          </motion.a>
        </motion.div>

        {/* ================= PROFILE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease,
          }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Floating decorative circles */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-8 rounded-full border border-dashed border-[#d8b46a]/10"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-16 rounded-full border border-[#6fe7ff]/[0.07]"
          />

          {/* Main glow */}
          <motion.div
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-8 rounded-full bg-[#d8b46a]/10 blur-[70px]"
          />

          {/* Card */}
          <motion.div
            whileHover={{
              y: -8,
              rotateX: 2,
              rotateY: -2,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className="glow-border glass relative aspect-square overflow-hidden rounded-[2rem] p-3"
          >
            {/* Inner rings */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-[#d8b46a]/20 border-dashed"
            />

            <div className="absolute inset-14 rounded-full border border-[#6fe7ff]/15" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(216,180,106,.2),transparent_35%)]" />

            {/* Image container */}
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-black/60">
              <motion.img
                src={profile.photo}
                alt={`${profile.name} profile photo`}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease,
                }}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Fallback letter */}
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-semibold text-white/[0.06]">
                M
              </div>

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

              {/* Status card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  ease,
                }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    System status
                  </div>

                  <span className="font-mono text-[9px] text-white/20">
                    ONLINE
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-white/75">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                  </span>

                  {profile.availability}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating tech labels */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 top-16 hidden rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-white/35 backdrop-blur-xl sm:block"
          >
            Java
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-8 bottom-28 hidden rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-white/35 backdrop-blur-xl sm:block"
          >
            React
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}