import { StyleSheet } from 'react-native';

import { colors, getLineHeight, typography } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: 64,
		padding: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.base['gray-400'],

		backgroundColor: colors.base['gray-500'],

		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	text: {
		fontSize: typography.normalSize,
		lineHeight: getLineHeight(typography.normalSize),

		flex: 1,
	},
	textVisible: {
		color: colors.base['gray-100'],
	},
	textTick: {
		textDecorationLine: 'line-through',
		color: colors.base['gray-300'],
	},
	trashButton: {
		padding: 8,
	},
});

export default Styles;
