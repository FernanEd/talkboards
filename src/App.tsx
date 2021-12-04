import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BoardsPage } from './components/pages/BoardsPage';
import { HomePage } from './components/pages/HomePage';

const App: React.FunctionComponent = () => {
	useEffect(() => {
		if (localStorage.getItem('dark_mode'))
			document.documentElement.classList.add('dark');

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
