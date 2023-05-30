import React from 'react';
import { Text, View } from 'react-native';

import { IProductColorsEnum } from '../../@types/core/theme';

import { colors } from '../../core/assets/theme';
import uniteStyles from '../../core/helpers/uniteStyles';

import Styles from './styles';

interface IListCountProp {
	label: string;
	count: number;
	color: IProductColorsEnum;
}

const ListCount: IComponent<IListCountProp> = ({ color, count, label }) => {
	return (
		<View accessible style={Styles.container}>
			<Text
				accessibilityLabel={`Título do contador refeten a "${label}."`}
				style={uniteStyles(Styles.countLabel, { color: colors.product[color] })}
			>
				{label}
			</Text>

			<View accessible style={Styles.countBox}>
				<Text
					accessibilityLabel={`Quantidade de itens referentes a "${label}".`}
					style={Styles.count}
				>
					{count}
				</Text>
			</View>
		</View>
	);
};

export default ListCount;
