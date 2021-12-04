import React, { useState } from 'react';
import Modal, { IModalProps } from '../common/Modal';
export interface IOptionsModalProps extends IModalProps {}

const OptionsModal: React.FC<IOptionsModalProps> = ({
	active,
	handleClose,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem('dark_mode') ? true : false
	);

	const handleDarkMode = (checked: boolean) => {
		if (checked) {
			localStorage.setItem('dark_mode', 'true');
			document.documentElement.classList.add('dark');
			setIsDarkMode(true);
		} else {
			localStorage.removeItem('dark_mode');
			document.documentElement.classList.remove('dark');
			setIsDarkMode(false);
		}
	};

	return (
		<Modal active={active} handleClose={handleClose}>
			<h2 className="heading">Options</h2>
			<section className="flex flex-col gap-4 mt-8">
				<label>
					<input
						type="checkbox"
						defaultChecked={isDarkMode}
						onChange={(e) => handleDarkMode(e.target.checked)}
					/>
					Dark mode
				</label>

				<label>
					<input type="color" />
					Primary color
				</label>

				<label>
					<select>
						<option value="sans" selected>
							Simple
						</option>
						<option value="serif">Elegant</option>
						<option value="mono">Haxer</option>
					</select>
					Font style
				</label>
			</section>
			<div className="flex justify-end">
				<button className="btn" onClick={() => handleClose()}>
					Close
				</button>
			</div>
		</Modal>
	);
};

export default OptionsModal;
