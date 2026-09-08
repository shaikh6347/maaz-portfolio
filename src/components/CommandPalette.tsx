 "use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

const commands = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Journey", "journey"], ["Certificates", "certificates"], ["Resume", "resume"], ["Contact", "contact"],
];

export function CommandPalette({ onAI }: { onAI: () => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const visible = commands.filter(([label]) => label.toLowerCase().includes(query.toLowerCase()));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-black/75 p-4 backdrop-blur-md" onMouseDown={() => setOpen(false)}>
      <div className="mx-auto mt-[12vh] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-white/8 px-4">
          <Search size={18} className="text-white/35" />
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search portfolio…" className="h-14 flex-1 bg-transparent outline-none" />
          <button onClick={() => setOpen(false)}><X size={17} /></button>
        </div>
        <div className="p-2">
          {visible.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-white/65 hover:bg-white/5 hover:text-white">{label}</a>
          ))}
          <button onClick={() => { setOpen(false); onAI(); }} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-[#f0d9a3] hover:bg-white/5">Open AI Assistant</button>
        </div>
        <div className="border-t border-white/8 px-4 py-3 text-xs text-white/30">Ctrl K / Cmd K · Esc to close</div>
      </div>
    </div>
  );
}
