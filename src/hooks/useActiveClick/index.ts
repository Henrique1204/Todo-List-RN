import React from 'react';

interface IUseActiveClickReturn {
	active: boolean;

	onPressIn: () => void;
	onPressOut: () => void;
}

type useActiveClickFn = () => IUseActiveClickReturn;

const useActiveClick: useActiveClickFn = () => {
	const [active, setActive] = React.useState<boolean>(false);

	const onPressIn = () => setActive(true);
	const onPressOut = () => setActive(false);

	return {
		active,
		onPressIn,
		onPressOut,
	};
};

export default useActiveClick;
