import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { getColorByKey } from '../theme';

const IconCheck: React.FC<IIconProps> = ({
	color = 'gray-100',
	width = 9,
	height = 7,
}) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill='none'
		>
			<Path
				d='M7.93059 0.342093L3.59865 4.67403L1.11618 2.19156L0.280273 3.02747L3.59865 6.34584L8.76649 1.178L7.93059 0.342093Z'
				fill={getColorByKey(color)}
			/>
		</Svg>
	);
};

export default IconCheck;
