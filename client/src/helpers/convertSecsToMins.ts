export const convertSecsToMins = (sec: number): string => {
	if (sec < 60) return `${sec} сек.`;

	const minutes = Math.floor(sec / 60);
	return `${minutes} мин.`;
}
