import React from 'react';
import { View, Image, Alert } from 'react-native';

import Styles from './styles';

import { removeTaskFn, updateTaskFn } from '../../@types/components/ListCard';
import { ITask } from '../../@types/data/task';

import useTaskStorage from '../../hooks/useTaskStorage';

import Form, { onSubmitFn } from '../../components/Form';
import MainList from '../../components/MainList';

const LogoPng = require('../../core/assets/images/logo.png');

const Home: React.FC = () => {
	const [tasks, setTasks] = React.useState<ITask[]>([]);

	const {
		getTasks,
		saveTask,
		removeTask: removeTaskStorage,
	} = useTaskStorage();

	const updateTasksList = async () => {
		const tasks = await getTasks();

		setTasks(tasks || []);
	};

	const handleOnSubmit: onSubmitFn = async (data, clearForm) => {
		if (tasks.some(({ content }) => content === data)) {
			Alert.alert(
				'Tarefa já existe.',
				'Já existe um item na lista para essa tarefa.'
			);

			return;
		}

		await saveTask({ completed: false, content: data });

		updateTasksList();

		clearForm();
	};

	const updateTask: updateTaskFn = async (task) => {
		await saveTask(task);

		updateTasksList();
	};

	const removeTask: removeTaskFn = async (id) => {
		await removeTaskStorage(id);

		updateTasksList();
	};

	React.useEffect(() => {
		updateTasksList();
	}, []);

	return (
		<View style={Styles.container}>
			<Image
				role='img'
				accessibilityRole='image'
				accessibilityLabel='Logo do "TODO APP" com um foguete decolando.'
				style={Styles.logo}
				source={LogoPng}
			/>

			<Form onSubmit={handleOnSubmit} />

			<MainList data={tasks} updateTask={updateTask} removeTask={removeTask} />
		</View>
	);
};

export default Home;
