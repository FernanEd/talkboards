import { useState } from 'react';

const useModal = (): [boolean, Function, Function, Function] => {
	const [active, setActive] = useState(false);

	const close = () => setActive(false);

	const open = () => setActive(true);

	const toggle = () => setActive((prev) => !prev);

	return [active, toggle, open, close];
};

export default useModal;
