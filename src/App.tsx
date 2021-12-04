import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BoardsPage } from './components/pages/BoardsPage';
import { HomePage } from './components/pages/HomePage';

const App: React.FunctionComponent = () => {
	useEffect(() => {
		if (localStorage.getItem('dark_mode'))
			document.documentElement.classList.add('dark');

		let primaryColor: string | null;
		if ((primaryColor = localStorage.getItem('primary_color')))
			document.documentElement.style.setProperty(
				'--primary-color',
				primaryColor
			);

		let fontStyle: string | null;
		if ((fontStyle = localStorage.getItem('font_style'))) {
			if (fontStyle == 'sans') {
				document.documentElement.style.setProperty('--font-style', 'Inter');
			} else if (fontStyle == 'serif') {
				document.documentElement.style.setProperty(
					'--font-style',
					'Times New Roman'
				);
			} else if (fontStyle == 'mono') {
				document.documentElement.style.setProperty('--font-style', 'monospace');
			}
		}

		return () => {};
	});

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/boards" exact>
					<BoardsPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
