import React from 'react';
import { Image, Text, View } from 'react-native';

import Styles from './styles';

const ListIcon = require('../../core/assets/images/list-icon.png');

const ListEmpty: React.FC = () => {
	return (
		<View style={Styles.container}>
			<Image style={Styles.listIcon} source={ListIcon} />

			<Text style={Styles.textEmphasis}>
				Você ainda não tem tarefas cadastradas
			</Text>

			<Text style={Styles.text}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
};

export default ListEmpty;
