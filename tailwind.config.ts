// @ts-ignore
import typography from "@tailwindcss/typography";
import {Config} from "tailwindcss";

export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {
            spacing: {
                '1/8': '12.5%',
                '1/10': '10%',
            },
            colors: {
                //brown
                'cafe-primary-50': "rgb(252 237 221)",
                'cafe-primary-100': "rgb( 251 231 209)",
                'cafe-primary-200': "rgb( 250 225 198)",
                'cafe-primary-300': "rgb( 247 207 163)",
                'cafe-primary-400': "rgb( 240 170 95)",
                'cafe-primary-500': "rgb( 234 134 26)",
                'cafe-primary-600': "rgb( 211 121 23)",
                'cafe-primary-700': "rgb( 176 101 20)",
                'cafe-primary-800': "rgb( 140 80 16)",
                'cafe-primary-900': "rgb( 115 66 13)",
                //surface
                "cafe-surface-50": "rgb(226 225 224)",
                "cafe-surface-100": "rgb(217 215 214)",
                "cafe-surface-200": "rgb(207 205 204)",
                "cafe-surface-300": "rgb(178 175 173)",
                "cafe-surface-400": "rgb(121 115 111)",
                "cafe-surface-500": "rgb(63 55 49)",
                "cafe-surface-600": "rgb(57 50 44)",
                "cafe-surface-700": "rgb(47 41 37)",
                "cafe-surface-800": "rgb(38 33 29)",
                "cafe-surface-900": "rgb(31 27 24)",
            },
        },
    },
    plugins: [
        typography
    ]
} satisfies Config