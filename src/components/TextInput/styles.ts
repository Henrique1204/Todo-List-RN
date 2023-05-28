import { StyleSheet } from 'react-native';

import { colors, typography } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	input: {
		height: 54,
		padding: 16,
		borderRadius: 6,
		borderWidth: 1,

		fontSize: typography.bigSize,
		color: colors.base['gray-100'],

		backgroundColor: colors.base['gray-500'],

		flex: 1,
	},
	inputEmpty: {
		borderColor: colors.base['gray-700'],
	},
	inputFilled: {
		borderColor: colors.product['purple-dark'],
	},
});

export default Styles;
