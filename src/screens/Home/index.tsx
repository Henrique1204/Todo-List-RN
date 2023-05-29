import React from 'react';
import { View, Image, Alert } from 'react-native';

import Styles from './styles';

import { removeTaskFn, updateTaskFn } from '../../@types/components/ListCard';
import { ITask } from '../../@types/data/task';

import Form, { onSubmitFn } from '../../components/Form';
import MainList from '../../components/MainList';

const LogoPng = require('../../core/assets/images/logo.png');

const Home: React.FC = () => {
	const [tasks, setTasks] = React.useState<ITask[]>([]);

	const handleOnSubmit: onSubmitFn = (data, clearForm) => {
		if (tasks.some(({ content }) => content === data)) {
			Alert.alert(
				'Tarefa já existe.',
				'Já existe um item na lista para essa tarefa.'
			);

			return;
		}

		const newTask = {
			id: tasks.length + 1,
			completed: false,
			content: data,
		};

		setTasks((prevTasks) => [...prevTasks, newTask]);

		clearForm();
	};

	const updateTask: updateTaskFn = (id, completed) => {
		const tasksUpdated = tasks.map((task) =>
			task.id === id ? { ...task, completed } : task
		);

		setTasks(tasksUpdated);
	};

	const removeTask: removeTaskFn = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<View style={Styles.container}>
			<Image style={Styles.logo} source={LogoPng} />

			<Form onSubmit={handleOnSubmit} />

			<MainList data={tasks} updateTask={updateTask} removeTask={removeTask} />
		</View>
	);
};

export default Home;
