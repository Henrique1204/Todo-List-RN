import { StyleProp } from 'react-native/types';

/**
 * Método para unir vários objetos de estilos em um só.
 *
 * @params Estilos que devem ser unidos.
 *
 * @return Novo objeto de estilo com todos os estilos passados unidos.
 */
const uniteStyles = <T>(...styles: any[]): StyleProp<T> => {
	return styles.reduce((acc, style) => {
		if (!style) return acc;

		return { ...acc, ...style };
	}, {});
};

export default uniteStyles;
