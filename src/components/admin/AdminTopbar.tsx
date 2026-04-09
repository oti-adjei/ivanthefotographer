export default function AdminTopbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0B0B0B] border-b border-white/10 z-50">
      <div className="h-full px-6 flex items-center gap-6">
        <div className="w-64 flex items-center">
          <span className="font-serif text-xl tracking-wide">Aperture</span>
        </div>

        <div className="flex-1">
          <div className="relative max-w-xl">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></i>
            <input
              type="text"
              placeholder="Search gallery or clients..."
              className="w-full h-10 pl-11 pr-4 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 focus:outline-none focus:border-teal"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
            <i className="ri-notification-3-line text-lg text-white/70"></i>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
            <i className="ri-mail-line text-lg text-white/70"></i>
          </button>
          <div className="flex items-center gap-2 pl-3 border-l border-white/10">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-xs font-semibold">
              AU
            </div>
            <span className="text-sm text-white/80">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
