import React from 'react';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITask } from '../../@types/data/task';

type saveTaskFn = (task: Partial<ITask>) => Promise<void>;
type getTasksFn = () => Promise<ITask[] | void>;
type removeTaskFn = (id: string) => Promise<void>;

interface IUseTaskStorageReturn {
	saveTask: saveTaskFn;
	getTasks: getTasksFn;
	removeTask: removeTaskFn;
}

type useTaskStorageFn = () => IUseTaskStorageReturn;

/**
 * Hook preservar dados de tarefas dentro do AsyncStorage.
 */
const useTaskStorage: useTaskStorageFn = () => {
	const generateId = async () => {
		const allKeys = await AsyncStorage.getAllKeys();

		if (allKeys.length === 0) return '1';

		const allkeysNumber = allKeys.map((key) => +key);

		return (Math.max(...allkeysNumber) + 1).toString();
	};

	const saveTask: saveTaskFn = async (task) => {
		try {
			const id = task.id || (await generateId());

			const newTaskString = JSON.stringify({
				id,
				...task,
			});

			await AsyncStorage.setItem(id, newTaskString);
		} catch ({ message }) {
			Alert.alert(`Ocorreu algum erro ao salvar tarefa: ${message}`);
		}
	};

	const getTasks: getTasksFn = async () => {
		try {
			const allKeys = await AsyncStorage.getAllKeys();
			const tasks = await AsyncStorage.multiGet(allKeys);

			return tasks
				.map(([_, task]) => JSON.parse(task!))
				.sort((a, b) => a.id.localeCompare(b.id));
		} catch ({ message }) {
			Alert.alert(`Erro ao buscar tarefas: ${message}`);
		}
	};

	const removeTask = async (id: string) => {
		try {
			await AsyncStorage.removeItem(id);
		} catch ({ message }) {
			Alert.alert(`Erro ao remover tarefa: ${message}`);
		}
	};

	return {
		saveTask,
		getTasks,
		removeTask,
	};
};

export default useTaskStorage;
