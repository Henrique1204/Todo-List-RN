import { StyleProp } from 'react-native/types';

const uniteStyles = <T>(...styles: any[]): StyleProp<T> => {
	return styles.reduce((acc, style) => {
		if (!style) return acc;

		return { ...acc, ...style };
	}, {});
};

export default uniteStyles;
