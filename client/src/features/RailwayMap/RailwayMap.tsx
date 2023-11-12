import React, {FC, useEffect, useState} from 'react';

import {AllStations, Station1} from "../../types";
interface Props {
	allStations: AllStations[];
}

const RailwayMap: FC<Props> = ({allStations}) => {
	const [line, setLine] = useState('');
  const [stationsByLine, setStationsByLine] = useState<any>([]);

	useEffect(() => {
		const stations = allStations.filter((station) => station.direction === line);
		setStationsByLine(stations[0]?.stations);
	}, [line])

	return (
		<div>
				<select defaultChecked={false} onChange={(e) => setLine(e.target.value)}>
					<option value="">выберите лайн</option>
					{allStations.map(({direction}) => <option key={direction} value={direction}>{direction}</option>) }
				</select>

			{stationsByLine?.map((station: Station1) => {
				return (
					<div
						key={station.codes.yandex_code}
						data-name={station.codes.yandex_code}
						onClick={(e: React.SyntheticEvent<EventTarget>) => {
							if (!(e.target instanceof HTMLButtonElement)) {
								return;
							}
							console.log(e.target.dataset.name)
							console.log('hello e')
							console.debug(e.target.dataset.name)
						}}
					>{station.title}</div>
				)
			})}

		</div>
	);
};

export default RailwayMap;
