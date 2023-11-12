import {Settlement} from "../types";

// interface Input {
// 	from: string;
// 	to: string;
// 	allStations: Settlement[]
// }

// todo ???
// interface Output {
// 	fromYaCode: string;
// 	toYaCode: string;
// }

// export function findYaCodes({from, to, allStations}: Input): { toYaCode: string; fromYaCode: string } {
export function findYaCodes(from: string, to: string, allStations: Settlement[]): { toYaCode: string; fromYaCode: string } {
  // @ts-ignore
	const fromYaCode = allStations.find((obj) => obj.title === from).stations
		.find((station) => station.direction).codes.yandex_code;
  // @ts-ignore
	const toYaCode = allStations.find((obj) => obj.title === to).stations
		.find((station) => station.direction).codes.yandex_code;

	return {fromYaCode, toYaCode};

}
