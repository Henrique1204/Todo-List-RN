import { StyleSheet } from 'react-native';

import { colors, getLineHeight, typography } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 48,
		borderTopWidth: 1,
		borderTopColor: colors.base['gray-400'],

		alignItems: 'center',
	},
	listIcon: {
		width: 56,
		height: 56,
	},
	textEmphasis: {
		marginTop: 16,

		fontSize: typography.normalSize,
		fontWeight: typography.weightEmphasis,
		lineHeight: getLineHeight(typography.normalSize),

		color: colors.base['gray-300'],
	},
	text: {
		fontSize: typography.normalSize,
		lineHeight: getLineHeight(typography.normalSize),

		color: colors.base['gray-300'],
	},
});

export default Styles;
