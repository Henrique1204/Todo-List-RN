import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import uniteStyles from '../../core/helpers/uniteStyles';

import useActiveClick from '../../hooks/useActiveClick';

import Styles from './styles';

interface IButtonProps {
	onPress: () => void;

	label?: string;
	disabled?: boolean;
}

const getBgStyle = (focus: boolean, disabled?: boolean) => {
	if (disabled) return Styles.buttonDisabled;

	return focus ? Styles.buttonFocus : Styles.buttonBlur;
};

const Button: IComponent<IButtonProps> = ({ children, label, ...props }) => {
	const { active, ...onPressMethods } = useActiveClick();

	return (
		<TouchableOpacity
			accessible
			accessibilityRole='button'
			role='button'
			accessibilityState={{
				disabled: props.disabled,
			}}
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
