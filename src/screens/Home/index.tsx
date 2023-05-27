import React from 'react';
import { View, Image } from 'react-native';

import Styles from './styles';

import TextInput from '../../components/TextInput';

const LogoPng = require('../../core/assets/images/Logo.png');

const Home: React.FC = () => {
	const [text, setText] = React.useState<string>('');

	return (
		<View style={Styles.container}>
			<Image style={Styles.logo} source={LogoPng} />

			<View style={Styles.form}>
				<TextInput
					placeholder='Adicione uma nova tarefa'
					value={text}
					onChange={setText}
				/>
			</View>
		</View>
	);
};

export default Home;
