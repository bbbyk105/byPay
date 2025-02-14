// tailwind.config.ts

import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindAnimate from "tailwindcss-animate";

/**
 * Tailwind プラグイン関数に渡される API の型をざっくり定義。
 * 必要に応じて拡張してください。
 */
interface TailwindPluginAPI {
  addBase: (rules: Record<string, Record<string, string>>) => void;
  theme: (path: string) => unknown;
}

function addVariablesForColors({ addBase, theme }: TailwindPluginAPI) {
  // `theme("colors")` は本来オブジェクトを返すので、型アサーションして Record<string,unknown> にする
  const colors = theme("colors") as Record<string, unknown>;
  // flattenColorPalette() は tailwind-types.d.ts で (Record<string, unknown>) => Record<string, string> と定義
  const allColors = flattenColorPalette(colors);

  // allColors は Record<string, string> なので val は string
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // 必要に応じて "./src/**/*.{js,ts,jsx,tsx,mdx}" など追記
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
    },
  },
  plugins: [
    tailwindAnimate,
    addVariablesForColors, // ← ここで上記のプラグインを呼び出し
  ],
} satisfies Config;
