import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import uniteStyles from '../../core/helpers/uniteStyles';
import Icons from '../../core/assets/icons';

import Styles from './styles';

interface ICheckBoxProps {
	onChange: (value: boolean) => void;

	initialValue?: boolean;
	size?: number;
}

const CheckBox: IComponent<ICheckBoxProps> = ({
	initialValue = false,
	size = 18,
	onChange,
	...props
}) => {
	const [checked, setChecked] = React.useState<boolean>(initialValue);

	const sizeStyle = {
		width: size,
		height: size,
		borderRadius: size,
	};

	const handleOnPress = () => {
		setChecked(!checked);
		onChange(!checked);
	};

	return (
		<TouchableOpacity
			accessible
			accessibilityRole='radio'
			role='radio'
			accessibilityState={{
				checked: checked,
			}}
			activeOpacity={1}
			onPress={handleOnPress}
			style={Styles.container}
			{...props}
		>
			<View
				style={uniteStyles(
					Styles.checkbox,
					sizeStyle,
					checked && Styles.checked
				)}
			>
				{checked && (
					<Icons.Check accessibilityLabel='Ícone de "visto" sinalizando que o checkbox foi marcado.' />
				)}
			</View>
		</TouchableOpacity>
	);
};

export default CheckBox;
