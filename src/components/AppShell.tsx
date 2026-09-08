
"use client";

import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";

import {
  AIButton,
  AIChat,
} from "@/components/AIChat";

import { CommandPalette } from "@/components/CommandPalette";
import { Background } from "@/components/Background";
import { Section } from "@/components/Section";
import { WordReveal } from "@/components/WordReveal";

import { profile } from "@/data/profile";

export function AppShell() {
  const [aiOpen, setAiOpen] = useState(false);

  const openAI = () => {
    setAiOpen(true);
  };

  return (
    <>
      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}
      <Background />

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar onAI={openAI} />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main>

        {/* ===================================================
            HERO
        ==================================================== */}
        <Hero onAI={openAI} />

        {/* ===================================================
            ABOUT / IDENTITY
        ==================================================== */}
        <Section
          id="about"
          eyebrow="Identity / 01"
          title="A digital identity, not a static résumé."
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">

            {/* About Text */}
            <div>
              <WordReveal
                text={profile.bio}
                className="
                  text-lg
                  leading-9
                  text-white/55
                  md:text-xl
                "
              />
            </div>

            {/* Core Direction Card */}
            <div
              className="
                glass
                group
                relative
                overflow-hidden
                rounded-3xl
                p-7
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#f0d9a3]/10
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:bg-[#f0d9a3]/20
                "
              />

              <div
                className="
                  relative
                  text-xs
                  uppercase
                  tracking-[.2em]
                  text-white/35
                "
              >
                Core direction
              </div>

              <WordReveal
                text="Full-stack systems with a strong product mindset."
                className="
                  relative
                  mt-4
                  text-2xl
                  leading-relaxed
                  text-[#f0d9a3]
                  md:text-3xl
                "
                delay={0.15}
              />
            </div>
          </div>
        </Section>

        {/* ===================================================
            SKILLS
        ==================================================== */}
        <Skills />

        {/* ===================================================
            PROJECTS
        ==================================================== */}
        <Projects />

        {/* ===================================================
            JOURNEY
        ==================================================== */}
        <Journey />

        {/* ===================================================
            CERTIFICATES
        ==================================================== */}
        <Certificates />

        {/* ===================================================
            RESUME
        ==================================================== */}
        <Section
          id="resume"
          eyebrow="Resume / 06"
          title="One clean professional document."
        >
          <div
            className="
              glass
              group
              relative
              overflow-hidden
              rounded-3xl
              p-7
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-[#f0d9a3]/5
                blur-3xl
                transition-all
                duration-700
                group-hover:bg-[#f0d9a3]/10
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                items-start
                justify-between
                gap-6
                sm:flex-row
                sm:items-center
              "
            >
              {/* Resume Information */}
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Maaz Shaikh — Resume
                </h3>

                <WordReveal
                  text="A clean overview of my technical skills, projects, education, experience and professional journey."
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-7
                    text-white/45
                  "
                  delay={0.1}
                />

                <p className="mt-3 text-xs text-white/25">
                  Place your PDF at{" "}
                  <code
                    className="
                      rounded
                      bg-white/5
                      px-2
                      py-1
                      text-white/40
                    "
                  >
                    /public/resume/Maaz_Shaikh_Resume.pdf
                  </code>
                </p>
              </div>

              {/* Resume Buttons */}
              <div className="flex shrink-0 gap-2">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-sm
                    text-white/80
                    transition-all
                    duration-300
                    hover:border-[#f0d9a3]/40
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  View Resume
                </a>

                <a
                  href={profile.resume}
                  download
                  className="
                    rounded-full
                    bg-[#f0d9a3]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_0_30px_rgba(240,217,163,0.2)]
                  "
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* ===================================================
            HIRE
        ==================================================== */}
        <Section
          id="hire"
          eyebrow="Opportunities / 08"
          title="Hire Maaz."
        >
          <div
            className="
              glass
              group
              relative
              overflow-hidden
              rounded-3xl
              p-8
            "
          >
            {/* Animated glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-[#f0d9a3]/5
                blur-3xl
                transition-all
                duration-700
                group-hover:bg-[#f0d9a3]/15
              "
            />

            {/* Hire Content */}
            <div className="relative">

              <WordReveal
                text="Available for opportunities involving the technologies explicitly listed in this portfolio: Java, Spring Boot, React, Angular, .NET, C#, REST APIs, Swagger, Postman, MySQL and SQL."
                className="
                  max-w-3xl
                  text-lg
                  leading-8
                  text-white/55
                  md:text-xl
                "
              />

              {/* CTA */}
              <a
                href="#contact"
                className="
                  mt-7
                  inline-flex
                  rounded-full
                  bg-[#f0d9a3]
                  px-6
                  py-3
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(240,217,163,0.25)]
                "
              >
                Send an Inquiry
              </a>
            </div>
          </div>
        </Section>

        {/* ===================================================
            CONTACT
        ==================================================== */}
        <Contact />

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer
        className="
          section-shell
          border-t
          border-white/5
          py-10
          text-sm
          text-white/35
        "
      >
        <div
          className="
            flex
            flex-col
            justify-between
            gap-4
            sm:flex-row
          "
        >
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>

          <span>
            Personal AI Digital Identity
          </span>
        </div>
      </footer>

      {/* =====================================================
          FLOATING AI BUTTON
      ====================================================== */}
      <AIButton onClick={openAI} />

      {/* =====================================================
          AI CHAT
      ====================================================== */}
      <AIChat
        open={aiOpen}
        onClose={() => setAiOpen(false)}
      />

      {/* =====================================================
          COMMAND PALETTE
      ====================================================== */}
      <CommandPalette onAI={openAI} />
    </>
  );
}
