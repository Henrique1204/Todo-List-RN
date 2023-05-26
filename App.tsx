import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const App: React.FC = () => {
	return (
		<SafeAreaView>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
		</SafeAreaView>
	);
};

export default App;
