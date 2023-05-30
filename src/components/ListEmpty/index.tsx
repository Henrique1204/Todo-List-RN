import React from 'react';
import { Image, Text, View } from 'react-native';

import Styles from './styles';

const ListIcon = require('../../core/assets/images/list-icon.png');

const ListEmpty: React.FC = () => {
	return (
		<View accessible style={Styles.container}>
			<Image
				role='img'
				accessibilityRole='image'
				accessibilityLabel='Imagem de uma prancheta representando uma lista.'
				style={Styles.listIcon}
				source={ListIcon}
			/>

			<Text
				accessibilityLabel='Você ainda não tem tarefas cadastradas.'
				style={Styles.textEmphasis}
			>
				Você ainda não tem tarefas cadastradas
			</Text>

			<Text
				accessibilityLabel='Crie tarefas e organize seus itens a fazer.'
				style={Styles.text}
			>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
};

export default ListEmpty;
