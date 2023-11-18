import React, {FC, memo} from 'react';

import {convertSecsToMins} from "../../helpers/convertSecsToMins";
import {convertDateToHHmm} from "../../helpers/convertDateToHHmm";

import classes from './Flight.module.scss';

interface Props {
	stops: string;
	arrival: Date;
	departure: Date;
	duration: number;
	title: string; // ""Новоиерусалимская — Серпухов""
	subtype: string; // Стандарт плюс
	price: number | any;
}

const Flight: FC<Props> = memo((
	{
		stops,
		arrival,
		departure,
		duration,
		title,
		price,
	}) => {

	return (
		<div className={classes.wrapper}>
			<div className={classes.segment}>
				<div>{convertDateToHHmm(departure)}</div>
			</div>
			<div className={classes.segment}>
				<div>{convertSecsToMins(duration)}</div>
			</div>
			<div className={classes.segment}>
				<div>{convertDateToHHmm(arrival)}</div>
			</div>
			<div className={classes.segment}>
				<div>{stops}</div>
			</div>
			<div className={classes.segment}>
				<div>{price ? price + ' ₽' : 'неизвестно'}</div>
			</div>
			<div className={classes.segment}>
				<div>{title}</div>
			</div>
		</div>
	);
});

export default Flight;
