import dayjs from "dayjs";

import {Segment} from "../types";

export const separatePastAndFuture = (arr: Segment[]) => {
	const now = dayjs();
	const past = [];
	const future = [];

	for (let i = 0; i <= arr.length; i++) {
			if (now > dayjs(new Date(arr[i]?.departure))) {
				past.push(arr[i])
			} else if (now < dayjs(new Date(arr[i]?.departure))) {
				future.push(arr[i])
			}
		}

	return {past, future};
}
