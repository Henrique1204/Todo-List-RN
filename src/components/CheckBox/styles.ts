import { StyleSheet } from 'react-native';

import { colors } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	container: {
		padding: 6,
	},
	checkbox: {
		borderWidth: 1,
		borderColor: colors.product.blue,

		alignItems: 'center',
		justifyContent: 'center',
	},
	checked: {
		borderColor: colors.product['purple-dark'],
		backgroundColor: colors.product['purple-dark'],
	},
});

export default Styles;
