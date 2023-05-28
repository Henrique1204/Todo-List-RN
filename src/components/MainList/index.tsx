import React from 'react';
import { FlatList, View } from 'react-native';

import Styles from './styles';

import ListCount from '../ListCount';

const MainList: React.FC = () => {
	return (
		<View style={Styles.container}>
			<FlatList
				data={[]}
				renderItem={() => <></>}
				ListHeaderComponent={
					<View style={Styles.listHeader}>
						<ListCount label='Criadas' color='blue' count={0} />
						<ListCount label='Concluídas' color='purple' count={0} />
					</View>
				}
			/>
		</View>
	);
};

export default MainList;
