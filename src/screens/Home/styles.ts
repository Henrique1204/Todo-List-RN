import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	container: {
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
