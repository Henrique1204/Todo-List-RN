const isEmptyString = (value: string): boolean => {
	return value.trim() === '' || value === null || value === undefined;
};

export default isEmptyString;
