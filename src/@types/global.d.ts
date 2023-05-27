import { IColorsEnum } from '../core/assets/theme';

declare global {
	export interface IIconProps {
		color?: IColorsEnum;
		width?: number;
		height?: number;
	}
}
