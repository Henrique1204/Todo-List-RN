import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import uniteStyles from '../../core/helpers/uniteStyles';

import useActiveClick from '../../hooks/useActiveClick';

import Styles from './styles';

interface IButtonProps {
	onPress: () => void;

	label?: string;
	children?: React.ReactNode;
	disabled?: boolean;
}

const getBgStyle = (focus: boolean, disabled?: boolean) => {
	if (disabled) return Styles.buttonDisabled;

	return focus ? Styles.buttonFocus : Styles.buttonBlur;
};

const Button: React.FC<IButtonProps> = ({ children, label, ...props }) => {
	const { active, ...onPressMethods } = useActiveClick();

	return (
		<TouchableOpacity
			activeOpacity={1}
			style={uniteStyles(Styles.button, getBgStyle(active, props.disabled))}
			{...onPressMethods}
			{...props}
		>
			{label ? <Text style={Styles.buttonText}>{label}</Text> : children}
		</TouchableOpacity>
	);
};

export default Button;
