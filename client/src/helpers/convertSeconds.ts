export const convertSeconds = (sec: number): string => {
	const mins = Math.floor(sec / 60);

	return mins + ' минут';
}
