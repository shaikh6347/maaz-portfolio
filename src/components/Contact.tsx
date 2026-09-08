"use client";

import { FormEvent, useState } from "react";
import {
  Loader2,
  Send,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";

const inquiryTypes = [
  "Job Opportunity",
  "Freelance Project",
  "Website Development",
  "Collaboration",
  "Internship",
  "General Inquiry",
  "Other",
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // IMPORTANT:
    // Save the form reference before awaiting fetch().
    const formElement = event.currentTarget;

    setLoading(true);
    setStatus("");

    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Submission failed."
        );
      }

      setStatus(
        "Your inquiry has been received. Maaz will get back to you soon."
      );

      // FIX:
      // Use saved form reference instead of event.currentTarget
      formElement.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Open channel / 07"
      title="Let's build something meaningful."
    >
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">

        {/* LEFT SIDE */}
        <div>
          <p className="text-lg leading-8 text-white/55">
            For jobs, freelance work, collaborations,
            internships or general inquiries, use the
            secure server-side form.
          </p>

          <div className="mt-8 space-y-4 text-sm text-white/50">
            <p>
              Email: {profile.email}
            </p>

            <p>
              Availability: {profile.availability}
            </p>
          </div>

          {/* DIRECT EMAIL CARD */}
          <div className="mt-8">
            <a
              href="mailto:shaikhmaaz7272@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#f0d9a3]/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0d9a3]/10 text-[#f0d9a3]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                    Contact me
                  </p>

                  <p className="mt-1 text-sm text-white/75">
                    shaikhmaaz7272@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f0d9a3]"
              />
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={submit}
          className="glass grid gap-4 rounded-3xl p-6 sm:grid-cols-2"
        >
          <input
            name="name"
            required
            minLength={2}
            maxLength={80}
            placeholder="Name"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#d8b46a]/50"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#d8b46a]/50"
          />

          <input
            name="phone"
            maxLength={30}
            placeholder="Phone (optional)"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#d8b46a]/50"
          />

          <select
            name="inquiryType"
            required
            defaultValue=""
            className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 outline-none"
          >
            <option value="" disabled>
              Inquiry type
            </option>

            {inquiryTypes.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>

          <input
            name="subject"
            required
            minLength={2}
            maxLength={150}
            placeholder="Subject"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#d8b46a]/50 sm:col-span-2"
          />

          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder="Your message"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#d8b46a]/50 sm:col-span-2"
          />

          {/* HONEYPOT */}
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0d9a3] px-5 py-3 font-medium text-black transition hover:bg-[#ffe7ae] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
          >
            {loading ? (
              <Loader2
                className="animate-spin"
                size={17}
              />
            ) : (
              <Send size={17} />
            )}

            {loading
              ? "Sending..."
              : "Send Inquiry"}
          </button>

          {/* STATUS */}
          {status && (
            <p
              className="text-sm text-white/65 sm:col-span-2"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}