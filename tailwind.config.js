/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'light-gray': "#eaeded",
				'lighter-gray': '#f5f5f5',
				'mid-blue': '#5e32ff',
				'dark-blue': '#0c0622',
				'orange': '#EBBE1A',
				'light-orange': '#fff7e9',
				'red': '#F71002',
				'light-bg': '#F1F3F5',
				'dark-alternate': '#132034',
				'darkest': '#002c43',
				'darker': '#003d5d',
				'dark': '#0079b6',
				'darklight': '#006090',

				'font': '#282828',
				'apbn-blue': '#29166f',
				'apbn-lblue': '#028fd9'
			},
			borderRadius: {
				"sm4": "4px"
			},
			fontSize: {
				'2xs': "10px"
			},
			boxShadow: {
				"custom": "0 2px 5px 0 rgba(0,0,0,0.2)"
			},
			aspectRatio: {
				'16/9': '16 / 9'
			},
			backgroundImage: {
        'home-mb': "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/images/452x452.webp')",
        'home-dk': "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/images/1290x268.webp')", 
      },
			backgroundPosition: {
				"shift": "center center"
			},
			backgroundSize: {
				"113": "113%"
			},
		},
	},
	plugins: [
		require("daisyui")
	],
}
