export interface Params {
	from: string;
	to: string;
}

export interface Settlement {
	codes: { yandex_code: 'c24461' };
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

export interface Regions {
	codes: { yandex_code: string; };
	settlements: Settlement[]
	title: string;
}

export type Line =
	'Горьковское' |
	'Ярославское' |
	'Казанское' |
	'Павелецкое' |
	'Белорусское' |
	'Киевское' |
	'Рижское' |
	'Савёловское' |
	'Ленинградское' |
	'МЦД-2' |
	'МЦД-1' |
	'МЦК: Московское центральное кольцо' |
	'Курское' |
	'Московский монорельс';

export interface Segment {
	arrival: Date;
	arrival_platform: string;
	arrival_terminal: string | null;
	departure: Date;
	departure_platform: string | null;
	departure_terminal: string | null;
	duration: number; // seconds
	from: FromOrTo;
	has_transfers: boolean;
	start_date: string;
	stops: string;

	tickets_info: {
		et_marker: boolean;
		places: Place[]
	} | null;

	to: FromOrTo;
	thread: {
		carrier: {
			address: string;
			code: number;
			codes: { sirena: null; iata: null; icao: null; };
			contacts: string;
			// contacts: "&bull; <strong>Горячая линия для пассажиров:</strong><br/>телефон +7 (800) 775-00-00 <i>(звонок из регионов России бесплатный)</i><br/><br/>\r\n&bull; <strong>Для юридических лиц по вопросам перевозки корпоративных клиентов:</strong><br/>телефон +7 (499) 266-02-65,  доб. 7842, 7582, 7368;<br/>e-mail: <a href=\"mailto:corp@central-ppk.ru\">corp@central-ppk.ru</a><br/><br/>\r\n&bull; <strong>Пожелания и предложения:</strong> <br/>факс: +7 (499) 266-02-55<br/>e-mail: <a href=\"mailto:info@central-ppk.ru\">info@central-ppk.ru</a><br/><br/>\r\n&bull; <strong>Социальные сети:</strong><br/>\r\n<a href=\"http://www.facebook.com/CentralnayaPPK\">www.facebook.com/CentralnayaPPK</a><br/>\r\n<a href=\"http://www.vk.com/centralppk\">www.vk.com/centralppk</a><br/>\r\n<a href=\"http://www.odnoklassniki.ru/centralppk\">www.odnoklassniki.ru/centralppk</a><br/>";
			email: string;
			logo: string;
			logo_svg: null;
			phone: string;
			title: string;
			url: string;
		};
		express_type: null;
		number: string;
		short_title: string;
		thread_method_link: string;
		title: string;
		transport_subtype: {
			code: string;
			color: string;
			title: string;
		};
		transport_type: Transport;
		uid: string;
		vehicle: string | null;
	}
}

interface FromOrTo {
	code: string;
	popular_title: string;
	short_title: string;
	station_type:
		|  'station'
		|  'platform'
		|	'stop'
		|  'checkpoint'
		|	'post'
		|	'crossing'
		|	'overtaking_point'
		|	'train_station'
		|	'airport'
		|	'bus_station'
		|	'bus_stop'
		|	'unknown'
		|	'port'
		|	'port_point'
		|	'wharf'
		|	'river_port'
		|	'marine_station';
	station_type_name: string;
	title: string;
	transport_type: Transport;
	type: 'station' | 'settlement'
}

type Transport =
	|	'plane'
	| 'train'
	| 'suburban'
	| 'bus'
	| 'water'
	| 'helicopter';

interface Place {
	currency: "RUB";
	name: string | null;
	price: Price
}

interface Price {
	cents: number;
	whole: number;
}

// ----------

export type Status  = 'idle' | 'loading' | 'error' | 'loaded' | 'empty';

export interface Station1 {
	codes: {esr_code: string; yandex_code: string;}
	title: string;
}

export interface AllStations {
	direction: string;
	stations: Station1[]
}

//
export enum NewStatuses {
	idle = 'idle',
	loading = 'loading',
	loaded = 'loaded',
	error = 'error',
	emptyData = 'emptyData',
}

export type NewStatus = NewStatuses;
