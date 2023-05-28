import React from 'react';
import { Text, View } from 'react-native';

import { IProductColorsEnum } from '../../@types/core/theme';
import { colors } from '../../core/assets/theme';
import uniteStyles from '../../helpers/uniteStyles';

import Styles from './styles';

interface IListCountProp {
	label: string;
	count: number;
	color: IProductColorsEnum;
}

const ListCount: React.FC<IListCountProp> = ({ color, count, label }) => {
	return (
		<View style={Styles.container}>
			<Text
				style={uniteStyles(Styles.countLabel, { color: colors.product[color] })}
			>
				{label}
			</Text>

			<View style={Styles.countBox}>
				<Text style={Styles.count}>{count}</Text>
			</View>
		</View>
	);
};

export default ListCount;
