/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
			marquee: {
			  from: { transform: "translateX(0)" },
			  to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"marquee-vertical": {
			  from: { transform: "translateY(0)" },
			  to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
		  },
		  animation: {
			marquee: "marquee var(--duration) linear infinite",
			"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
