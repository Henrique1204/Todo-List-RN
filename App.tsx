import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { colors } from './src/core/assets/theme';

const App: React.FC = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.base['gray-700'] }}>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
		</SafeAreaView>
	);
};

export default App;
