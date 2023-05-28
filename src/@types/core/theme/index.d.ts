import {
	baseColors,
	feedbackColors,
	productColors,
} from '../../../core/assets/theme/colors';

type IProductColors = typeof productColors;
export type IProductColorsEnum = keyof IProductColors;

type IBaseColors = typeof baseColors;
export type IBaseColorsEnum = keyof IBaseColors;

type IFeedbackColors = typeof feedbackColors;
export type IFeedbackColorsEnum = keyof IFeedbackColors;

export type IColorsEnum =
	| IProductColorsEnum
	| IBaseColorsEnum
	| IFeedbackColorsEnum;

export interface ITypography {
	smallSize: number;
	normalSize: number;
	bigSize: number;
	lineHeight: number;
	weightNormal: 'regular';
	weightEmphasis: 'bold';
}
