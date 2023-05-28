import { StyleSheet } from 'react-native';

import { colors, typography } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	button: {
		minWidth: 52,
		minHeight: 52,
		paddingLeft: 8,
		paddingRight: 8,
		borderRadius: 6,

		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonBlur: {
		backgroundColor: colors.product['blue-dark'],
	},
	buttonFocus: {
		backgroundColor: colors.product['blue'],
	},
	buttonDisabled: {
		backgroundColor: colors.base['gray-300'],
	},
	buttonText: {
		padding: 0,
		margin: 0,

		fontSize: typography.bigSize,
		color: colors.base['gray-100'],
	},
});

export default Styles;
