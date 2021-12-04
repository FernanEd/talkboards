module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class',
	mode: 'jit',
	theme: {
		extend: {
			width: {
				page: '700px',
			},
			colors: {
				modalbg: '#8C9CA0',
				primary: 'var(--primary-color)',
				textcol: {
					DEFAULT: '#000000',
					dark: '#FFFFFF',
				},
				text2col: {
					DEFAULT: '#333333',
					dark: '#CCCCCC',
				},
				text3col: {
					DEFAULT: '#666666',
					dark: '#AAAAAA',
				},
				text4col: {
					DEFAULT: '#999999',
					dark: '#888888',
				},
				background: {
					DEFAULT: '#FFFFFF',
					dark: '#222222',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
