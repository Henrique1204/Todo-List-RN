import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../core/assets/theme';

const Styles = StyleSheet.create({
	container: {
		width: '100%',
		height: Dimensions.get('screen').height - 165,
		paddingTop: 58,
		paddingRight: 24,
		paddingBottom: 74,
		paddingLeft: 24,

		backgroundColor: colors.base['gray-700'],

		position: 'absolute',
		bottom: -50,
		zIndex: 0,
	},
});

export default Styles;
