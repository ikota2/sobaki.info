import isEmptyData from './isEmptyData';
import { NewStatus, NewStatuses } from '../types';

interface MakeRequestToServer<T> {
	setStatus: (value: NewStatus) => void;
	callback: () => Promise<T>;
	setData?: (value: T) => void;
	// setSubmitting?: FormikSetSubmitting;
}

const { loading, loaded, emptyData, error } = NewStatuses;

const request = async <T>(
	{
		setStatus,
		callback,
		setData,
		// setSubmitting,
	}: MakeRequestToServer<T>,
): Promise<void> => {
	setStatus(loading);
	try {
		const data = await callback();
		if (isEmptyData(data)) {
			setStatus(emptyData);
		} else {
			if (setData) setData(data);
			setStatus(loaded);
		}
	} catch (err) {
		setStatus(error);
		console.log(err);
	}
	// finally {
	// 	if (setSubmitting) setSubmitting(false);
	// }
};

export default request;
