 "use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Certificates", "certificates"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export function Navbar({ onAI }: { onAI: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          M<span className="text-gold">.</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm text-white/65 transition hover:text-white">
              {label}
            </a>
          ))}
          <button
            onClick={onAI}
            className="inline-flex items-center gap-2 rounded-full border border-[#d8b46a]/30 bg-[#d8b46a]/10 px-4 py-2 text-sm text-[#f0d9a3] transition hover:bg-[#d8b46a]/20"
          >
            <Sparkles size={15} /> AI
          </button>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-black/90 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-4">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-white/80">
                {label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onAI(); }}
              className="flex items-center gap-2 rounded-xl border border-[#d8b46a]/30 px-4 py-3 text-left text-[#f0d9a3]"
            >
              <Sparkles size={16} /> Talk to Maaz AI
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
