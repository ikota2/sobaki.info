interface Settlement {
	codes: { yandex_code: "c24461" };
	title: string;
	stations: Station[]
}

interface Station {
	codes: { esr_code: string; yandex_code: string; };
	direction: string;
	latitude: number;
	longitude: number;
	station_type: string;
	title: string;
	transport_type: string;
}

export function findStation(arr: Settlement[], value: string ) {
  return arr
		.filter((obj) => obj.title === value)[0].stations // находим условное нахабино
		.filter((obj) => obj.direction) // находим нахабино именно жд версию
}
