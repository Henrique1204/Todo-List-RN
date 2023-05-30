import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { IListCardProps } from '../../@types/components/ListCard';

import Icons from '../../core/assets/icons';
import uniteStyles from '../../core/helpers/uniteStyles';

import useActiveClick from '../../hooks/useActiveClick';

import CheckBox from '../CheckBox';

import Styles from './styles';

const ListCard: IComponent<IListCardProps> = ({
	id,
	content,
	completed,
	removeTask,
	updateTask,
}) => {
	const { active, ...onPressMethods } = useActiveClick();

	return (
		<View accessible style={Styles.container}>
			<CheckBox
				accessibilityHint='Irá adicionar ou remover uma linha no meio do texto dentro do card.'
				accessibilityLabel='Marca tarefa como concluída ou pendente ao clicar.'
				onChange={(toggle) => updateTask(id, toggle)}
				initialValue={completed}
			/>

			<Text
				accessibilityLabel='Descrição da tarefa do card.'
				style={uniteStyles(
					Styles.text,
					completed ? Styles.textTick : Styles.textVisible
				)}
			>
				{content}
			</Text>

			<TouchableOpacity
				accessible
				accessibilityRole='button'
				role='button'
				accessibilityHint='Irá remover o card de tarefa.'
				accessibilityLabel='Botão de excluir tarefa.'
				activeOpacity={1}
				style={Styles.trashButton}
				onPress={() => removeTask(id)}
				{...onPressMethods}
			>
				<Icons.Trash
					accessibilityLabel='Ícone de "lixo" sinalizando que o item pode ser excluído.'
					color={active ? 'danger' : 'gray-300'}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default ListCard;
