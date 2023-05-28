import { StyleSheet } from 'react-native';

import { colors } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	container: {
		backgroundColor: colors.base['gray-800'],
		flex: 1,
		alignItems: 'center',
	},
	logo: {
		width: 110,
		height: 32,
		marginTop: 24,
		marginBottom: 40,
	},
	form: {
		width: '100%',
		paddingLeft: 24,
		paddingRight: 24,

		flexDirection: 'row',
		gap: 4,
	},
});

export default Styles;
