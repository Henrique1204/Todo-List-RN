import {
	IBaseColorsEnum,
	IColorsEnum,
	IFeedbackColorsEnum,
	IProductColorsEnum,
	ITypography,
} from '../../../@types/core/theme';

import { baseColors, feedbackColors, productColors } from './colors';

export const typography: ITypography = {
	smallSize: 12,
	normalSize: 14,
	bigSize: 16,
	weightNormal: 'regular',
	weightEmphasis: 'bold',
};

export const colors = {
	base: baseColors,
	feedback: feedbackColors,
	product: productColors,
};

export const getColorByKey = (key: IColorsEnum): string => {
	return (
		productColors?.[key as IProductColorsEnum] ||
		baseColors?.[key as IBaseColorsEnum] ||
		feedbackColors?.[key as IFeedbackColorsEnum]
	);
};

export const getLineHeight = (fontSize: number): number => {
	const lineHeightScale = 1.4;

	return fontSize * lineHeightScale;
};
