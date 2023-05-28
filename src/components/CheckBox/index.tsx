import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import uniteStyles from '../../helpers/uniteStyles';
import Icons from '../../core/assets/icons';

import Styles from './styles';

interface ICheckBoxProps {
	onChange: (value: boolean) => void;

	initialValue?: boolean;
	size?: number;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
	initialValue = false,
	size = 18,
	onChange,
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
			activeOpacity={1}
			onPress={handleOnPress}
			style={Styles.container}
		>
			<View
				style={uniteStyles(
					Styles.checkbox,
					sizeStyle,
					checked && Styles.checked
				)}
			>
				{checked && <Icons.Check />}
			</View>
		</TouchableOpacity>
	);
};

export default CheckBox;
