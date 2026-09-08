export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-[#d8b46a]/10 blur-[100px]" />
      <div className="absolute right-[8%] top-[32%] h-72 w-72 rounded-full bg-[#6fe7ff]/8 blur-[110px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
    </div>
  );
}
