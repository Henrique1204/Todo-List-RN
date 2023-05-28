import React from 'react';
import { View, Image } from 'react-native';

import Styles from './styles';

import Form, { onSubmitFn } from '../../components/Form';

const LogoPng = require('../../core/assets/images/Logo.png');

const Home: React.FC = () => {
	const handleOnSubmit: onSubmitFn = (data, onSuccess) => {};

	return (
		<View style={Styles.container}>
			<Image style={Styles.logo} source={LogoPng} />

			<Form onSubmit={handleOnSubmit} />
		</View>
	);
};

export default Home;
