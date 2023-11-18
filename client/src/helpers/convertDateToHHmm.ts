import dayjs from 'dayjs';

export const convertDateToHHmm = (d: Date) => {
	if (dayjs(d).isValid()) {
		return dayjs(d).format('HH:mm');
	}
	return '??';
}
