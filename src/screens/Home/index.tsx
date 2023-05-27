import React from 'react';
import { View, Image } from 'react-native';

import Styles from './styles';

const LogoPng = require('../../core/assets/images/Logo.png');

const Home: React.FC = () => {
	return (
		<View style={Styles.container}>
			<Image style={Styles.logo} source={LogoPng} />
		</View>
	);
};

export default Home;
