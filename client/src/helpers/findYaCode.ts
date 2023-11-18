import {AllStations} from '../types';

export function findYaCode(title: string, arr: AllStations[]) {
	let code = '';
	for (let line of arr) {
		for (let station of line.stations) {
			if (title === station.title) {
				code += station.codes.yandex_code
			}
		}
	}
	return code;
}
