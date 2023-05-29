import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Styles from './styles';

import Icons from '../../core/assets/icons';

import uniteStyles from '../../helpers/uniteStyles';

import useActiveClick from '../../hooks/useActiveClick';

import CheckBox from '../CheckBox';

interface IListCardProps {
	id: number;
	content: string;
	completed: boolean;

	onRemove: (id: number) => void;
	onChangeCompleted: (toggle: boolean) => void;
}

const ListCard: React.FC<IListCardProps> = ({
	id,
	content,
	completed,
	onRemove,
	onChangeCompleted,
}) => {
	const { active, ...onPressMethods } = useActiveClick();

	return (
		<View style={Styles.container}>
			<CheckBox onChange={onChangeCompleted} initialValue={completed} />

			<Text
				style={uniteStyles(
					Styles.text,
					completed ? Styles.textTick : Styles.textVisible
				)}
			>
				{content}
			</Text>

			<TouchableOpacity
				activeOpacity={1}
				style={Styles.trashButton}
				onPress={() => onRemove(id)}
				{...onPressMethods}
			>
				<Icons.Trash color={active ? 'danger' : 'gray-300'} />
			</TouchableOpacity>
		</View>
	);
};

export default ListCard;
