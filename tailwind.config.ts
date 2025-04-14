import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";

const SCREENS = {
  xs: { min: "0px", max: "375px" }, // 375px 이하: 초소형 디바이스
  sm: { min: "376px", max: "640px" }, // 376px ~ 640px: 소형 디바이스
  md: { min: "641px", max: "1024px" }, // 641px ~ 1024px: 중간 디바이스 (태블릿, 소형 노트북 등)
  lg: { min: "1025px", max: "1440px" }, // 1025px ~ 1440px: 대형 디바이스 (일반 데스크탑)
  xl: { min: "1441px" }, // 1441px 이상: 초대형 디바이스
} as const;

// naver map 기본 zindex가 100부터여서 숫자를 높임
const zIndexValues = {
  10: (10 * 100).toString(),
  20: (20 * 100).toString(),
  30: (30 * 100).toString(),
  40: (40 * 100).toString(),
  50: (50 * 100).toString(),
};

// primary: #d5bdaf (필로스 디자인 로고색)
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      zIndex: zIndexValues,
      width: {
        inherit: "inherit",
      },
      height: {
        inherit: "inherit",
      },
      maxWidth: {
        inherit: "inherit",
      },
      maxHeight: {
        inherit: "inherit",
      },
      minWidth: {
        inherit: "inherit",
      },
      minHeight: {
        inherit: "inherit",
      },
      container: {
        // screens,
        screens: {
          // sm: "640px", // 기본값은 유지
          // md: "900px", // 기존 768px → 900px으로 확장
          // lg: "1200px", // 기존 1024px → 1200px으로 확장
          xl: "1440px", // 기존 1280px → 1440px으로 확장
        },
        center: true,
        padding: "1rem",
      },
      screens: SCREENS,
      colors: {
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        "dark-gray": "hsl(var(--dark-gray))",
        gray: "hsl(var(--gray))",
        "light-gray": "hsl(var(--light-gray))",
        chip: {
          red: "hsl(var(--chip-red))",
        },
        typo: {
          DEFAULT: "hsl(var(--black))",
          black: "hsl(var(--black))",
          "dark-gray": "hsl(var(--dark-gray))",
          gray: "hsl(var(--gray))",
          "light-gray": "hsl(var(--light-gray))",
          white: "hsl(var(--white))",
        },
        background: {
          DEFAULT: "hsl(var(--background-default))",
          dialog: "hsl(var(--background-dialog))",
          primary: "hsl(var(--background-primary))",
          foreground: "hsl(var(--background-foreground))",
        },
        // background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // popover: {
        //   DEFAULT: "hsl(var(--popover-default))",
        //   primary: "hsl(var(--popover-primary))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        DEFAULT: "var(--font-size-lg)",
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
        "8xl": "var(--font-size-8xl)",
        "9xl": "var(--font-size-9xl)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "slide-in": "slide-in 0.5s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,

    plugin(({ addUtilities }) => {
      addUtilities({
        ".separator": {
          "& > *:not(:first-child)::before": {
            // 첫 번째 요소 제외, 나머지 앞에 세로줄 추가
            content: "''", // 빈 콘텐츠로 세로줄 표시
            display: "inline-block", // 블록으로 렌더링
            width: "1px", // 세로줄 두께
            height: "1em", // 텍스트 높이만큼 세로줄 길이
            backgroundColor: "hsl(var(--gray))", // 세로줄 색상
            margin: "0 1rem", // 세로줄 오른쪽 여백
            verticalAlign: "middle", // 텍스트 중앙에 배치
          },
          "& > *:first-child::before": {
            content: "none", // 첫 번째 요소의 세로줄 제거
          },
        },
        ".gnb-container": {
          maxWidth: SCREENS.lg.max,
          margin: "0 auto",
        },
        ".content-container": {
          maxWidth: SCREENS.lg.max,
          margin: "0 auto",
          padding: "16px",
        },
        // ".separator": {
        //   "& > *:not(:last-child)::after": {
        //     content: "''", // 텍스트 사이에 | 추가
        //     borderRight: "0.1px solid hsl(var(--text-light-gray))",
        //     borderLeft: "0.1px solid hsl(var(--text-light-gray))",
        //     margin: "0 0.5rem", // 좌우 여백 설정
        //     verticalAlign: "middle", // 텍스트 높이의 중간에 배치
        //   },
        // },
        // ".last:after:content-none": {
        //   "& > *:last-child::after": {
        //     content: "none", // 마지막 요소에는 | 제거
        //   },
        // },
      });
    }),
  ],
} satisfies Config;
