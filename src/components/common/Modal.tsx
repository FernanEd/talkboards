import React from 'react';

export interface IModalProps {
	active: boolean;
	handleClose: Function;
}

const Modal: React.FC<IModalProps> = ({ children, active, handleClose }) => {
	if (!active) return null;

	return (
		<div className="modal-bg" onClick={() => handleClose()}>
			<div
				className="modal"
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
