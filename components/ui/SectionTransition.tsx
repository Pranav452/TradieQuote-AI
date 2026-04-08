"use client";

import { useId } from "react";

/**
 * Section seams: default organic waves (`variant="wave"`), or a single shallow
 * arc with white + emerald glow (`variant="arc"`) - intended for hero → next.
 */

type SectionTone = "hero" | "green" | "white";

const FILL: Record<SectionTone, string> = {
  hero: "#0b140b",
  green: "#0b140b",
  white: "#ffffff",
};

const GREEN_SOFT = "#0d160d";

const STROKE_MAIN = "rgb(255 255 255 / 0.34)";
const STROKE_SOFT = "rgb(167 243 208 / 0.4)";

/** Single shallow arc: symmetric ∩ seam, same y at both ends (viewBox 1200×100). */
const ARC = {
  seam: "M0,56 Q600,36 1200,56",
  top: "M0,0 H1200 V56 Q600,36 0,56 Z",
} as const;

/** [seam from (0,y0) to (1200,y1), top polygon path closing at (0,y0)] */
const WAVES: readonly { seam: string; top: string }[] = [
  {
    seam: "M0,44 C200,46 380,58 520,50 C660,42 780,14 900,20 C1000,26 1120,48 1200,52",
    top: "M0,0 H1200 V52 C1120,48 1000,26 900,20 C780,14 660,42 520,50 C380,58 200,46 0,44 Z",
  },
  {
    seam: "M0,52 C320,28 460,20 560,26 C660,32 720,62 820,58 C920,54 1060,38 1200,42",
    top: "M0,0 H1200 V42 C1060,38 920,54 820,58 C720,62 660,32 560,26 C460,20 320,28 0,52 Z",
  },
  {
    seam: "M0,48 C140,62 300,58 440,44 C580,30 720,18 820,22 C940,28 1080,50 1200,46",
    top: "M0,0 H1200 V46 C1080,50 940,28 820,22 C720,18 580,30 440,44 C300,58 140,62 0,48 Z",
  },
  {
    seam: "M0,54 C220,40 400,24 540,30 C680,36 760,60 860,56 C960,52 1100,42 1200,40",
    top: "M0,0 H1200 V40 C1100,42 960,52 860,56 C760,60 680,36 540,30 C400,24 220,40 0,54 Z",
  },
  {
    seam: "M0,46 C280,52 450,58 600,48 C750,38 880,16 980,22 C1060,28 1140,44 1200,48",
    top: "M0,0 H1200 V48 C1140,44 1060,28 980,22 C880,16 750,38 600,48 C450,58 280,52 0,46 Z",
  },
  {
    seam: "M0,58 C180,34 360,18 500,24 C640,30 700,64 800,60 C900,56 1040,36 1200,44",
    top: "M0,0 H1200 V44 C1040,36 900,56 800,60 C700,64 640,30 500,24 C360,18 180,34 0,58 Z",
  },
  {
    seam: "M0,50 C300,54 420,22 580,26 C740,30 820,58 920,54 C1000,50 1120,40 1200,42",
    top: "M0,0 H1200 V42 C1120,40 1000,50 920,54 C820,58 740,30 580,26 C420,22 300,54 0,50 Z",
  },
  {
    seam: "M0,42 C160,48 340,56 480,46 C620,36 760,20 880,24 C1000,28 1120,46 1200,50",
    top: "M0,0 H1200 V50 C1120,46 1000,28 880,24 C760,20 620,36 480,46 C340,56 160,48 0,42 Z",
  },
  {
    seam: "M0,55 C250,58 430,48 600,36 C770,24 890,18 970,24 C1050,30 1130,48 1200,46",
    top: "M0,0 H1200 V46 C1130,48 1050,30 970,24 C890,18 770,24 600,36 C430,48 250,58 0,55 Z",
  },
  {
    seam: "M0,47 C210,42 390,28 550,32 C710,36 850,62 960,58 C1040,56 1120,44 1200,40",
    top: "M0,0 H1200 V40 C1120,44 1040,56 960,58 C850,62 710,36 550,32 C390,28 210,42 0,47 Z",
  },
];

interface SectionTransitionProps {
  from: SectionTone;
  to: SectionTone;
  /** `arc` = one shallow glow line (hero → section 2). `wave` = indexed bump profile. */
  variant?: "wave" | "arc";
  /** Used when `variant="wave"` (wraps). Ignored for `arc`. */
  waveIndex: number;
  className?: string;
}

export function SectionTransition({
  from,
  to,
  variant = "wave",
  waveIndex,
  className = "",
}: SectionTransitionProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `wave-glow-${uid}`;
  const arcBloomId = `arc-bloom-${uid}`;
  const heroGradId = `hero-wave-${uid}`;
  const arcStrokeGradId = `arc-stroke-${uid}`;
  const arcEmeraldGradId = `arc-emerald-${uid}`;

  const wave =
    variant === "arc"
      ? ARC
      : WAVES[((waveIndex % WAVES.length) + WAVES.length) % WAVES.length]!;
  const { seam, top: topPath } = wave;

  const topSolid =
    from === "green" && to === "green" ? GREEN_SOFT : FILL[from];
  const bottom = FILL[to];

  const useHeroBlend = from === "hero";
  const isArc = variant === "arc";

  return (
    <div
      className={`relative z-10 -mt-px h-16 w-full max-w-full overflow-x-clip md:h-24 ${className}`}
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={filterId}
            x="-25%"
            y="-50%"
            width="150%"
            height="200%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="2.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {isArc && (
            <filter
              id={arcBloomId}
              x="-40%"
              y="-120%"
              width="180%"
              height="340%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="5.5" result="bloom" />
              <feMerge>
                <feMergeNode in="bloom" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
          {isArc && (
            <linearGradient
              id={arcStrokeGradId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="1200"
              y2="0"
            >
              <stop offset="0%" stopColor="rgb(255 255 255)" stopOpacity="0" />
              <stop
                offset="38%"
                stopColor="rgb(209 250 229)"
                stopOpacity="0.2"
              />
              <stop
                offset="50%"
                stopColor="rgb(255 255 255)"
                stopOpacity="0.65"
              />
              <stop
                offset="62%"
                stopColor="rgb(167 243 208)"
                stopOpacity="0.28"
              />
              <stop offset="100%" stopColor="rgb(255 255 255)" stopOpacity="0" />
            </linearGradient>
          )}
          {isArc && (
            <linearGradient
              id={arcEmeraldGradId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="1200"
              y2="0"
            >
              <stop offset="0%" stopColor="rgb(167 243 208)" stopOpacity="0" />
              <stop offset="45%" stopColor="rgb(167 243 208)" stopOpacity="0.22" />
              <stop offset="50%" stopColor="rgb(190 242 200)" stopOpacity="0.38" />
              <stop offset="55%" stopColor="rgb(167 243 208)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="rgb(167 243 208)" stopOpacity="0" />
            </linearGradient>
          )}
          {useHeroBlend && (
            <linearGradient
              id={heroGradId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="100"
            >
              <stop offset="0%" stopColor="#0b140b" stopOpacity="1" />
              <stop offset="42%" stopColor="#0a120a" stopOpacity="1" />
              <stop offset="100%" stopColor="#0b140b" stopOpacity="1" />
            </linearGradient>
          )}
        </defs>

        <path
          d={topPath}
          fill={useHeroBlend ? `url(#${heroGradId})` : topSolid}
        />
        <path d={`${seam} V100 H0 Z`} fill={bottom} />

        {isArc ? (
          <>
            <path
              d={seam}
              fill="none"
              stroke={`url(#${arcEmeraldGradId})`}
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter={`url(#${arcBloomId})`}
            />
            <path
              d={seam}
              fill="none"
              stroke={`url(#${arcStrokeGradId})`}
              strokeWidth="1.15"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter={`url(#${arcBloomId})`}
            />
            <path
              d={seam}
              fill="none"
              stroke={`url(#${arcStrokeGradId})`}
              strokeWidth="0.45"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </>
        ) : (
          <>
            <path
              d={seam}
              fill="none"
              stroke={STROKE_MAIN}
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
              filter={`url(#${filterId})`}
            />
            <path
              d={seam}
              fill="none"
              stroke={STROKE_SOFT}
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>
    </div>
  );
}
