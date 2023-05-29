import { StyleSheet } from 'react-native';

import { colors, typography } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	countLabel: {
		fontSize: typography.normalSize,
		fontWeight: typography.weightEmphasis,
		textTransform: 'capitalize',
	},
	countBox: {
		paddingTop: 2,
		paddingRight: 8,
		paddingLeft: 8,
		paddingBottom: 2,
		borderRadius: 16,

		backgroundColor: colors.base['gray-400'],
	},
	count: {
		fontSize: typography.smallSize,
		fontWeight: typography.weightEmphasis,
		color: colors.base['gray-100'],
	},
});

export default Styles;
