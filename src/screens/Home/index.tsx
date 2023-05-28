import React from 'react';
import { View, Image } from 'react-native';

import Styles from './styles';

import Icons from '../../core/assets/icons';

import isEmptyString from '../../helpers/isEmptyString';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

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

				<Button
					onPress={() => {
						setText('10');
					}}
					disabled={isEmptyString(text)}
				>
					<Icons.Plus />
				</Button>
			</View>
		</View>
	);
};

export default Home;
