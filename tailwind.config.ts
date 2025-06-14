import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"!./src/**/*.{spec,test}.{js,ts,jsx,tsx}",
		"!./node_modules/**",
	],
	prefix: "",
	corePlugins: {
		preflight: true,
		container: true,
		accessibility: true,
		pointerEvents: true,
		visibility: true,
		position: true,
		inset: true,
		isolation: true,
		zIndex: true,
		order: true,
		gridColumn: true,
		gridColumnStart: true,
		gridColumnEnd: true,
		gridRow: true,
		gridRowStart: true,
		gridRowEnd: true,
		float: true,
		clear: true,
		margin: true,
		boxSizing: true,
		display: true,
		aspectRatio: true,
		height: true,
		maxHeight: true,
		minHeight: true,
		width: true,
		minWidth: true,
		maxWidth: true,
		flex: true,
		flexShrink: true,
		flexGrow: true,
		flexBasis: true,
		tableLayout: false,
		borderCollapse: false,
		borderSpacing: false,
		captionSide: false,
		listStyleType: false,
		listStylePosition: false,
		resize: false,
		scrollBehavior: false,
		scrollMargin: false,
		scrollPadding: false,
		scrollSnapAlign: false,
		scrollSnapStop: false,
		scrollSnapType: false,
		touchAction: false,
		userSelect: false,
		willChange: false,
		contain: false,
		columns: false,
		breakAfter: false,
		breakBefore: false,
		breakInside: false,
		boxDecorationBreak: false,
	},
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
