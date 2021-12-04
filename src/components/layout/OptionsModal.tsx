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

	const [primaryColor, setPrimaryColor] = useState(
		localStorage.getItem('primary_color') || '#34a4c7'
	);

	const [textStyle, setTextStyle] = useState(
		localStorage.getItem('font_style') || 'sans'
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

	const handlePrimaryColor = (value: string) => {
		localStorage.setItem('primary_color', value);
		document.documentElement.style.setProperty('--primary-color', value);
		setPrimaryColor(value);
	};

	const handleFontStyle = (value: string) => {
		if (value == 'sans') {
			document.documentElement.style.setProperty('--font-style', 'Inter');
		} else if (value == 'serif') {
			document.documentElement.style.setProperty(
				'--font-style',
				'Times New Roman'
			);
		} else if (value == 'mono') {
			document.documentElement.style.setProperty('--font-style', 'monospace');
		}
		localStorage.setItem('font_style', value);
		setTextStyle(value);
	};

	const resetSettings = () => {
		localStorage.removeItem('dark_mode');
		document.documentElement.classList.remove('dark');
		localStorage.removeItem('primary_color');
		document.documentElement.style.setProperty('--primary-color', '#34a4c7');
		localStorage.removeItem('font_style');
		document.documentElement.style.setProperty('--font-style', 'Inter');
		setIsDarkMode(false);
		setPrimaryColor('#34a4c7');
		setTextStyle('sans');
	};

	return (
		<Modal active={active} handleClose={handleClose}>
			<h2 className="heading">Options</h2>
			<section className="flex flex-col gap-4 mt-8">
				<label>
					<input
						type="checkbox"
						checked={isDarkMode}
						onChange={(e) => handleDarkMode(e.target.checked)}
					/>
					Dark mode
				</label>

				<label>
					<input
						type="color"
						value={primaryColor}
						onChange={(e) => handlePrimaryColor(e.target.value)}
					/>
					Primary color
				</label>

				<label>
					<select
						onChange={(e) => handleFontStyle(e.target.value)}
						value={textStyle}>
						<option value="sans">Simple</option>
						<option value="serif">Elegant</option>
						<option value="mono">Haxer</option>
					</select>
					Font style
				</label>
			</section>
			<div className="flex justify-end gap-8">
				<button className="btn" onClick={() => resetSettings()}>
					Reset settings
				</button>
				<button className="btn" onClick={() => handleClose()}>
					Close
				</button>
			</div>
		</Modal>
	);
};

export default OptionsModal;
