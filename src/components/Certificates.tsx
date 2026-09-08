"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Award,
  FileText,
  Trophy,
  ExternalLink,
} from "lucide-react";

import { certificates } from "@/data/certificates";
import { Section } from "@/components/Section";

export function Certificates() {
  const [index, setIndex] = useState<number | null>(null);
  const [resultOpen, setResultOpen] = useState(false);

  if (!certificates.length) {
    return (
      <Section
        id="certificates"
        eyebrow="Proof / 05"
        title="Certificates"
      >
        <div className="glass rounded-3xl border border-dashed p-10 text-center text-white/45">
          Add certificate records in{" "}
          <code>src/data/certificates.ts</code> and images in{" "}
          <code>public/certificates/</code>.
        </div>
      </Section>
    );
  }

  const certificate = certificates[0];

  const previousCertificate = () => {
    if (index === null) return;

    setIndex(
      (index - 1 + certificates.length) % certificates.length
    );
  };

  const nextCertificate = () => {
    if (index === null) return;

    setIndex((index + 1) % certificates.length);
  };

  return (
    <Section
      id="certificates"
      eyebrow="Proof / 05"
      title="Certificates & Results"
    >
      {/* CARDS */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {/* CERTIFICATE CARD */}
        {certificates.map((certificate, i) => (
          <button
            key={certificate.id}
            onClick={() => setIndex(i)}
            className="group glass overflow-hidden rounded-3xl text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#f0d9a3]/30"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

              {/* Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs backdrop-blur-md">
                <Award size={13} className="text-[#f0d9a3]" />
                Certificate
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm text-white/45">
                {certificate.issuer}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-white/35">
                  {certificate.date}
                </span>

                <span className="text-xs text-[#f0d9a3]">
                  View Certificate →
                </span>
              </div>
            </div>
          </button>
        ))}

        {/* RESULT CARD */}
        {certificate.result && (
          <button
            onClick={() => setResultOpen(true)}
            className="group glass relative overflow-hidden rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#f0d9a3]/30"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0d9a3]/10 blur-3xl transition group-hover:bg-[#f0d9a3]/20" />

            {/* Icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0d9a3]/20 bg-[#f0d9a3]/10 text-[#f0d9a3]">
              <Trophy size={25} />
            </div>

            {/* Heading */}
            <div className="relative mt-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-white">
                  Result / Marksheet
                </h3>
              </div>

              <p className="mt-2 text-sm text-white/45">
                Board of Examination Statement of Marks
              </p>
            </div>

            {/* Score */}
            <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Grand Total
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-[#f0d9a3]">
                    {certificate.result.obtainedMarks}
                    <span className="text-lg text-white/30">
                      /{certificate.result.totalMarks}
                    </span>
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-semibold text-white">
                    {certificate.result.percentage}%
                  </p>

                  <p className="mt-1 text-xs text-[#f0d9a3]">
                    {certificate.result.grade}
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="relative mt-5 space-y-2 text-xs text-white/40">
              <div className="flex justify-between">
                <span>Marksheet No.</span>
                <span className="text-white/65">
                  {certificate.result.marksheetNo}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Place</span>
                <span className="text-white/65">
                  {certificate.result.place}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="relative mt-6 flex items-center gap-2 text-sm text-[#f0d9a3]">
              <FileText size={16} />
              View Complete Result
              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </button>
        )}
      </div>

      {/* CERTIFICATE IMAGE MODAL */}
      {index !== null && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          {/* Close */}
          <button
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            onClick={() => setIndex(null)}
            aria-label="Close certificate"
          >
            <X size={20} />
          </button>

          {/* Previous */}
          {certificates.length > 1 && (
            <button
              className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white sm:left-8"
              onClick={previousCertificate}
              aria-label="Previous certificate"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Image */}
          <div className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center">
            <img
              src={certificates[index].image}
              alt={certificates[index].title}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
          </div>

          {/* Next */}
          {certificates.length > 1 && (
            <button
              className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white sm:right-8"
              onClick={nextCertificate}
              aria-label="Next certificate"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      )}

      {/* RESULT / MARKSHEET MODAL */}
      {resultOpen && certificate.result && (
        <div
          className="fixed inset-0 z-[95] overflow-y-auto bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Result details"
        >
          <div className="mx-auto max-w-4xl py-8">

            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#f0d9a3]">
                  <Trophy size={15} />
                  Academic Result
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Board of Examination Statement of Marks
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  {certificate.title}
                </p>
              </div>

              <button
                onClick={() => setResultOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close result"
              >
                <X size={20} />
              </button>
            </div>

            {/* Result Summary */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                  Grand Total
                </p>

                <p className="mt-2 text-3xl font-semibold text-[#f0d9a3]">
                  {certificate.result.obtainedMarks}
                  <span className="text-lg text-white/30">
                    /{certificate.result.totalMarks}
                  </span>
                </p>
              </div>

              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                  Percentage
                </p>

                <p className="mt-2 text-3xl font-semibold text-white">
                  {certificate.result.percentage}%
                </p>
              </div>

              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                  Grade
                </p>

                <p className="mt-2 text-3xl font-semibold text-[#f0d9a3]">
                  {certificate.result.grade}
                </p>
              </div>
            </div>

            {/* Candidate Details */}
            <div className="glass mt-5 rounded-3xl p-6">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
                <FileText
                  size={18}
                  className="text-[#f0d9a3]"
                />
                Candidate Details
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-white/30">
                    Candidate ID
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {certificate.result.candidateId}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    Marksheet No.
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {certificate.result.marksheetNo}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    Sector
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {certificate.result.sector}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    Job Role
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {certificate.result.jobRole}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs text-white/30">
                    Centre / ATC
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {certificate.result.centreName}
                  </p>
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="glass mt-5 overflow-hidden rounded-3xl">
              <div className="border-b border-white/10 p-6">
                <h3 className="text-lg font-semibold">
                  Subject-wise Performance
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/30">
                      <th className="px-6 py-4">
                        Subject
                      </th>

                      <th className="px-6 py-4">
                        Code
                      </th>

                      <th className="px-6 py-4">
                        Maximum
                      </th>

                      <th className="px-6 py-4">
                        Theory
                      </th>

                      <th className="px-6 py-4">
                        Practical
                      </th>

                      <th className="px-6 py-4">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {certificate.result.subjects.map(
                      (subject) => (
                        <tr
                          key={subject.code}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="px-6 py-5">
                            <p className="text-sm font-medium text-white/80">
                              {subject.name}
                            </p>

                            <p className="mt-1 text-xs text-white/30">
                              {subject.totalInWords}
                            </p>
                          </td>

                          <td className="px-6 py-5 text-sm text-white/45">
                            {subject.code}
                          </td>

                          <td className="px-6 py-5 text-sm text-white/45">
                            {subject.maximumMarks}
                          </td>

                          <td className="px-6 py-5 text-sm text-white/65">
                            {subject.theory ?? "—"}
                          </td>

                          <td className="px-6 py-5 text-sm text-white/65">
                            {subject.practical ?? "—"}
                          </td>

                          <td className="px-6 py-5 text-sm font-semibold text-[#f0d9a3]">
                            {subject.total}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#f0d9a3]/10 bg-[#f0d9a3]/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs text-white/30">
                  Examination Date
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {certificate.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-white/30">
                  Place
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {certificate.result.place}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-white/30">
                  Overall Performance
                </p>

                <p className="mt-1 text-sm font-semibold text-[#f0d9a3]">
                  {certificate.result.obtainedMarks}/
                  {certificate.result.totalMarks} ·{" "}
                  {certificate.result.percentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}