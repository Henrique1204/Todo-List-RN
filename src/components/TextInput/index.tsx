import React from 'react';

import { TextInput as Input } from 'react-native';
import { TextInput as ITextInput } from 'react-native/types';

import { colors } from '../../core/assets/theme';
import isEmptyString from '../../core/helpers/isEmptyString';
import uniteStyles from '../../core/helpers/uniteStyles';

import Styles from './styles';

interface ITextInputProps {
	value: string;
	onChange: (value: string) => void;

	placeholder?: string;
}

const TextInput = React.forwardRef<ITextInput, ITextInputProps>(
	({ onChange, value, ...props }, ref) => {
		const borderStyle = isEmptyString(value)
			? Styles.inputEmpty
			: Styles.inputFilled;

		return (
			<Input
				ref={ref}
				value={value}
				onChangeText={onChange}
				style={uniteStyles(Styles.input, borderStyle)}
				defaultValue=''
				placeholderTextColor={colors.base['gray-300']}
				{...props}
			/>
		);
	}
);

export default TextInput;
