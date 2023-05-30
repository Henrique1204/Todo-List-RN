import React from 'react';

import { View } from 'react-native';
import { TextInput as ITextInput } from 'react-native/types';

import Icons from '../../core/assets/icons';
import isEmptyString from '../../core/helpers/isEmptyString';

import Button from '../Button';
import TextInput from '../TextInput';

import Styles from './styles';

export type onSubmitFn = (data: string, clearForm: () => void) => void;

interface IFormProps {
	onSubmit: onSubmitFn;
}

const Form: IComponent<IFormProps> = ({ onSubmit }) => {
	const [text, setText] = React.useState<string>('');

	const inputRef = React.useRef<ITextInput>(null);

	const clearForm = () => {
		setText('');

		inputRef?.current?.focus();
	};

	const handleOnPress = () => onSubmit(text, clearForm);

	return (
		<View accessible style={Styles.container}>
			<TextInput
				accessibilityLabel='Campo para descrever a tarefa que você deseja adicionar.'
				ref={inputRef}
				placeholder='Adicione uma nova tarefa.'
				value={text}
				onChange={setText}
			/>

			<Button
				accessibilityLabel='Adicionar tarefa nova.'
				onPress={handleOnPress}
				disabled={isEmptyString(text)}
			>
				<Icons.Plus accessibilityLabel='Ícone de "mais" indicando ação de adição de item.' />
			</Button>
		</View>
	);
};

export default Form;
