import dayjs from "dayjs";

export const today = dayjs().format("YYYY-MM-DD")

export const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");
