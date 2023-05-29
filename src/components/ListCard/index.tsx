import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { IListCardProps } from '../../@types/components/ListCard';

import Icons from '../../core/assets/icons';
import uniteStyles from '../../core/helpers/uniteStyles';

import useActiveClick from '../../hooks/useActiveClick';

import CheckBox from '../CheckBox';

import Styles from './styles';

const ListCard: React.FC<IListCardProps> = ({
	id,
	content,
	completed,
	removeTask,
	updateTask,
}) => {
	const { active, ...onPressMethods } = useActiveClick();

	return (
		<View style={Styles.container}>
			<CheckBox
				onChange={(toggle) => updateTask(id, toggle)}
				initialValue={completed}
			/>

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
				onPress={() => removeTask(id)}
				{...onPressMethods}
			>
				<Icons.Trash color={active ? 'danger' : 'gray-300'} />
			</TouchableOpacity>
		</View>
	);
};

export default ListCard;
