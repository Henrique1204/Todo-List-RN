import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './styles';

import uniteStyles from '../../helpers/uniteStyles';

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
	const [focus, setFocus] = React.useState<boolean>(false);

	return (
		<TouchableOpacity
			activeOpacity={1}
			style={uniteStyles(Styles.button, getBgStyle(focus, props.disabled))}
			onPressIn={() => setFocus(true)}
			onPressOut={() => setFocus(false)}
			{...props}
		>
			{label ? <Text style={Styles.buttonText}>{label}</Text> : children}
		</TouchableOpacity>
	);
};

export default Button;
