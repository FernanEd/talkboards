import * as React from 'react';
import { Logo } from './Logo';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Layout.css';
import Modal from '../common/Modal';
import useModal from '../hooks/useModal';
import OptionsModal from './OptionsModal';

export const Layout: React.FunctionComponent = ({ children }) => {
	const [optionsModal, toggleOptionsModal] = useModal();

	return (
		<>
			<OptionsModal active={optionsModal} handleClose={toggleOptionsModal} />
			<header className="main-header flex justify-between items-center w-page mx-auto my-4">
				<Logo />
				<nav>
					<ul>
						<li className="flex gap-8 font-bold text-text2col dark:text-text2col-dark">
							<NavLink exact to="/" activeClassName="text-primary">
								Home
							</NavLink>
							<NavLink exact to="/boards" activeClassName="text-primary">
								Boards
							</NavLink>
							<button
								className="font-bold"
								onClick={() => toggleOptionsModal()}>
								Options
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main className="main-content w-page mx-auto my-16">{children}</main>
		</>
	);
};
