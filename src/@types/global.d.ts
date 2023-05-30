import { AccessibilityProps } from 'react-native';

import { IColorsEnum } from '../core/assets/theme';

declare global {
	export interface IIconProps {
		color?: IColorsEnum;
		width?: number;
		height?: number;
	}

	export interface IDefaultProps extends Partial<AccessibilityProps> {
		testId?: string;
		children?: React.ReactNode;
	}

	export interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}
}
