import React from 'react';
import { View, Image } from 'react-native';

import Styles from './styles';

import Form, { onSubmitFn } from '../../components/Form';
import MainList from '../../components/MainList';

const LogoPng = require('../../core/assets/images/logo.png');

const Home: React.FC = () => {
	const handleOnSubmit: onSubmitFn = (data, onSuccess) => {};

	return (
		<View style={Styles.container}>
			<Image style={Styles.logo} source={LogoPng} />

			<Form onSubmit={handleOnSubmit} />

			<MainList />
		</View>
	);
};

export default Home;
