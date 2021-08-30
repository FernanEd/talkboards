module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			primary: {
				DEFAULT: '#34A4C7',
				dark: '#61C7E8',
			},
			textcol: {
				DEFAULT: '#000000',
				dark: '#AAAAAA',
			},
			text2col: {
				DEFAULT: '#333333',
				dark: '#DDDDDD',
			},
			text3col: {
				DEFAULT: '#666666',
				dark: '#AAAAAA',
			},
		},
		extend: {
			width: {
				page: '700px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
