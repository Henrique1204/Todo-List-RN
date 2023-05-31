import React from 'react';
import { FlatList, View } from 'react-native';

import { ITask } from '../../@types/data/task';
import { updateTaskFn, removeTaskFn } from '../../@types/components/ListCard';

import ListCount from '../ListCount';
import ListEmpty from '../ListEmpty';
import ListCard from '../ListCard';

import Styles from './styles';

interface IMainListProps {
	data: ITask[];

	updateTask: updateTaskFn;
	removeTask: removeTaskFn;
}

const MainList: React.FC<IMainListProps> = ({
	data,
	updateTask,
	removeTask,
}) => {
	return (
		<View accessible style={Styles.container}>
			<FlatList
				accessibilityLabel='Lista de tarefas.'
				role='list'
				accessibilityRole='list'
				data={data}
				keyExtractor={({ id }) => `list-card-${id}`}
				renderItem={({ item }) => (
					<ListCard {...item} updateTask={updateTask} removeTask={removeTask} />
				)}
				ListHeaderComponent={
					<View style={Styles.listHeader}>
						<ListCount label='Criadas' color='blue' count={data.length} />

						<ListCount
							label='Concluídas'
							color='purple'
							count={data.filter((task) => task?.completed).length}
						/>
					</View>
				}
				ListEmptyComponent={<ListEmpty />}
			/>
		</View>
	);
};

export default MainList;
