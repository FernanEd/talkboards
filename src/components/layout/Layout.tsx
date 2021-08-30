import * as React from 'react';
import { Logo } from './Logo';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Layout.css';

export const Layout: React.FunctionComponent = ({ children }) => {
	return (
		<>
			<header className="main-header flex justify-between items-center w-page mx-auto my-4">
				<Logo />
				<nav>
					<ul>
						<li className="flex gap-8 font-bold text-text2col">
							<NavLink exact to="/" activeClassName="text-primary">
								Home
							</NavLink>
							<NavLink exact to="/boards" activeClassName="text-primary">
								Boards
							</NavLink>
							<NavLink exact to="/options" activeClassName="text-primary">
								Options
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className="main-content w-page mx-auto my-16">{children}</main>
		</>
	);
};
