const isEmptyData = <T>(data: T): boolean => {
	const isEmptyArray = Array.isArray(data) && data.length === 0;
	const isEmptyObject = typeof data === 'object'
		&& !Array.isArray(data)
		&& data !== null
		&& Object.keys(data).length === 0
		&& !(data instanceof Blob);

	return isEmptyArray || isEmptyObject || !data;
};


export default isEmptyData;
