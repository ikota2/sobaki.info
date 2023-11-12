import dayjs from "dayjs";

export const convertDateToHHmm = (d: Date) => {
	if (d) return dayjs(d).format('HH:mm')
	return '??';
}
