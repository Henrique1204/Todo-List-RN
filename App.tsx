import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { colors } from './src/core/assets/theme';

import Home from './src/screens/Home';

const Styles = StyleSheet.create({
	container: {
		backgroundColor: colors.base['gray-800'],
		flex: 1,
	},
});

const App: React.FC = () => {
	return (
		<SafeAreaView style={Styles.container}>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>

			<Home />
		</SafeAreaView>
	);
};

export default App;
