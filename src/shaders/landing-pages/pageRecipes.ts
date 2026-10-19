import type { PageTypographyRecipe } from "./pageTypography";
import { INSTRUMENT_SERIF, NEWSREADER, GEIST } from "./pageTypography";

const round = (val: number) => Number(val.toFixed(3));
const px = (val: number) => `${round(val)}px`;
const u = (val: number) => `calc(${round(val)} * var(--u))`;

function hexToRgba(hex: string, alpha: number): string {
  const [r, g, b] = [1, 3, 5].map((s) => Number.parseInt(hex.slice(s, s + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const KAGE_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [
    {
      value: "onest",
      label: "Onest",
      stack: "'Onest', system-ui, -apple-system, 'Helvetica Neue', sans-serif",
    },
    INSTRUMENT_SERIF,
    NEWSREADER,
    GEIST,
  ],
  bodyFonts: [
    {
      value: "onest",
      label: "Onest",
      stack: "'Onest', system-ui, -apple-system, 'Helvetica Neue', sans-serif",
    },
    GEIST,
    NEWSREADER,
    INSTRUMENT_SERIF,
  ],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "400",
  bodyWeights: ["300", "400", "500", "600"],
  bodyWeight: "300",
  primaryColor: "#e0231c",
  headingSize: [30, 46, 72],
  bodySize: [13, 17, 24],
  headingLetterSpacing: [-0.06, -0.012, 0.12],
  css: (v) => `
:root {
  --vermilion: ${v.primary};
  --ember: ${v.retone("#ff5a3c")};
}
body { font-family: ${v.body}; }
body, .body, .body-lg, .num { font-weight: ${v.bodyWeight}; }
h1:not(.jp), h2:not(.jp), h3:not(.jp), .display:not(.jp) {
  font-family: ${v.heading};
  font-weight: ${v.headingWeight};
}
.display { letter-spacing: ${v.headingLetterSpacing}em; }
.h-hero { font-size: clamp(26px, 3.05vw, ${px(v.headingSize)}); }
.h-sec { font-size: clamp(30px, 4vw, ${px((v.headingSize * 60) / 46)}); }
.body-lg { font-size: clamp(14px, 1.02vw, ${px(v.bodySize)}); }
.body { font-size: ${px(Math.max(11, v.bodySize - 3))}; }
`,
};

export const SYLVA_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [
    {
      value: "lexend",
      label: "Lexend",
      stack: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    INSTRUMENT_SERIF,
    NEWSREADER,
    GEIST,
  ],
  bodyFonts: [
    {
      value: "lexend",
      label: "Lexend",
      stack: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    GEIST,
    NEWSREADER,
    INSTRUMENT_SERIF,
  ],
  headingWeights: ["200", "300", "400", "500", "600"],
  headingWeight: "300",
  bodyWeights: ["200", "300", "400", "500"],
  bodyWeight: "300",
  primaryColor: "#ffffff",
  headingSize: [40, 63, 92],
  bodySize: [12, 16.5, 24],
  headingLetterSpacing: [-0.06, -0.006, 0.12],
  css: (v) => `
:root {
  --ink: ${v.primary};
  --ink-soft: ${hexToRgba(v.primary, 0.62)};
  --ink-faint: ${hexToRgba(v.primary, 0.44)};
}
body { font-family: ${v.body}; font-weight: ${v.bodyWeight}; }
.headline, .ghost {
  font-family: ${v.heading};
}
.headline {
  font-weight: ${v.headingWeight};
  font-size: ${u(v.headingSize)};
  line-height: ${u((v.headingSize * 65) / 63)};
  letter-spacing: ${v.headingLetterSpacing}em;
}
.lede {
  font-weight: ${v.bodyWeight};
  font-size: ${u(v.bodySize)};
  line-height: ${u((v.bodySize * 22) / 16.5)};
}
@media (max-width: 900px) {
  .headline {
    font-size: ${u((v.headingSize * 62) / 63)};
    line-height: ${u((v.headingSize * 66) / 63)};
  }
  .lede {
    font-size: ${u((v.bodySize * 19) / 16.5)};
    line-height: ${u((v.bodySize * 27) / 16.5)};
  }
}
`,
};

export const COMPLETE_SHELF_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [
    {
      value: "iowan-old-style",
      label: "Iowan Old Style",
      stack: '"Iowan Old Style", Baskerville, "Times New Roman", serif',
    },
    INSTRUMENT_SERIF,
    NEWSREADER,
    GEIST,
  ],
  bodyFonts: [
    {
      value: "inter",
      label: "Inter",
      stack: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    },
    GEIST,
    NEWSREADER,
    INSTRUMENT_SERIF,
  ],
  headingWeights: ["400", "500", "600"],
  headingWeight: "400",
  bodyWeights: ["400", "500", "600"],
  bodyWeight: "400",
  primaryColor: "#c87046",
  headingSize: [32, 60, 88],
  bodySize: [10, 12, 18],
  headingLetterSpacing: [-0.1, -0.055, 0.08],
  css: (v) => `
:root { --accent: ${v.primary}; }
body { font-family: ${v.body}; font-weight: ${v.bodyWeight}; }
.selection__title, .detail-title, .editorial-identity strong, .page-status strong {
  font-family: ${v.heading};
  font-weight: ${v.headingWeight};
}
.selection__title {
  font-size: clamp(32px, 3.4vw, ${px(v.headingSize)});
  letter-spacing: ${v.headingLetterSpacing}em;
}
.detail-title {
  font-size: clamp(56px, 6.3vw, ${px((v.headingSize * 107.2) / 60)});
  letter-spacing: ${round(v.headingLetterSpacing - 0.01)}em;
}
.selection__note { font-size: ${px(v.bodySize)}; font-weight: ${v.bodyWeight}; }
.detail-deck { font-family: ${v.body}; font-weight: ${v.bodyWeight}; }
@media (max-width: 880px) {
  .selection__title { font-size: clamp(32px, 9vw, ${px((v.headingSize * 56) / 60)}); }
  .detail-title { font-size: clamp(48px, 14vw, ${px((v.headingSize * 80) / 60)}); }
}
@media (max-width: 560px) {
  .selection__title { font-size: ${px((v.headingSize * 32) / 60)}; }
}
`,
};

export const BESTSELLERS_TYPOGRAPHY: PageTypographyRecipe = {
  headingFonts: [
    {
      value: "iowan-old-style",
      label: "Iowan Old Style",
      stack: '"Iowan Old Style", Baskerville, "Times New Roman", serif',
    },
    INSTRUMENT_SERIF,
    NEWSREADER,
    GEIST,
  ],
  bodyFonts: [
    {
      value: "iowan-old-style",
      label: "Iowan Old Style",
      stack: '"Iowan Old Style", Baskerville, "Times New Roman", serif',
    },
    GEIST,
    NEWSREADER,
    INSTRUMENT_SERIF,
  ],
  headingWeights: ["400", "500", "600", "700"],
  headingWeight: "500",
  bodyWeights: ["400", "500", "600", "700"],
  bodyWeight: "400",
  primaryColor: "#c3a47b",
  headingSize: [184, 325, 420],
  bodySize: [12, 17, 24],
  headingLetterSpacing: [-0.12, -0.085, 0.08],
  css: (v) => `
:root {
  --pink: ${v.primary};
  --pink-bright: ${v.retone("#dbc39c")};
  --periwinkle: ${v.retone("#b7976c")};
}
body { font-family: ${v.body}; font-weight: ${v.bodyWeight}; }
.brand, .hero-word, .detail-title, .cover-title {
  font-family: ${v.heading};
  font-weight: ${v.headingWeight};
}
.hero-word {
  font-size: clamp(184px, 22vw, ${px(v.headingSize)});
  letter-spacing: ${v.headingLetterSpacing}em;
}
.detail-title {
  font-size: clamp(52px, 5.7vw, ${px((v.headingSize * 82) / 325)});
  letter-spacing: ${round(v.headingLetterSpacing + 0.03)}em;
}
.detail-description { font-size: clamp(12px, 1.28vw, ${px(v.bodySize)}); font-weight: ${v.bodyWeight}; }
@media (max-width: 900px) {
  .hero-word { font-size: clamp(128px, 28vw, ${px((v.headingSize * 230) / 325)}); }
  .detail-title { font-size: clamp(48px, 10vw, ${px((v.headingSize * 70) / 325)}); }
}
@media (max-width: 560px) {
  .hero-word { font-size: calc(${round(v.headingSize / 325)} * 38vw); }
}
`,
};
