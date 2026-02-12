export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Circular brush strokes inspired by logo */}
      <div className="absolute top-20 right-32 w-96 h-96 opacity-[0.02] dark:opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 5"
            className="text-teal"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            className="text-teal-light"
          />
        </svg>
      </div>

      {/* Abstract calligraphic marks */}
      <div className="absolute top-1/3 left-20 w-64 h-64 opacity-[0.025] dark:opacity-[0.035] animate-[spin_80s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,50 Q40,20 60,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-teal"
          />
          <path
            d="M10,70 Q30,40 50,70 T90,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-accent"
          />
        </svg>
      </div>

      {/* Scattered ancient writing marks */}
      <div className="absolute bottom-40 right-1/4 w-48 h-48 opacity-[0.02] dark:opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <text
            x="20"
            y="30"
            fontSize="8"
            fill="currentColor"
            className="text-teal font-serif"
            style={{ writingMode: 'vertical-rl' }}
          >
            光影
          </text>
          <text
            x="50"
            y="50"
            fontSize="6"
            fill="currentColor"
            className="text-accent font-serif"
          >
            瞬間
          </text>
          <text
            x="70"
            y="70"
            fontSize="7"
            fill="currentColor"
            className="text-teal-light font-serif"
          >
            永恆
          </text>
        </svg>
      </div>

      {/* Flowing organic lines */}
      <div className="absolute top-2/3 left-1/3 w-80 h-80 opacity-[0.02] dark:opacity-[0.03] animate-[spin_100s_linear_infinite]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M50,100 C50,50 150,50 150,100 S50,150 50,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-teal"
          />
          <circle cx="100" cy="100" r="3" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      {/* Small scattered dots */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 opacity-[0.03] dark:opacity-[0.04]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="20" cy="20" r="1" fill="currentColor" className="text-teal" />
          <circle cx="60" cy="40" r="1.5" fill="currentColor" className="text-teal-light" />
          <circle cx="80" cy="70" r="1" fill="currentColor" className="text-accent" />
          <circle cx="30" cy="80" r="1.2" fill="currentColor" className="text-teal" />
        </svg>
      </div>

      {/* Zen circle (enso) */}
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 opacity-[0.015] dark:opacity-[0.025] animate-[spin_120s_linear_infinite_reverse]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,20 A80,80 0 1,1 95,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-teal"
          />
        </svg>
      </div>
    </div>
  );
}
