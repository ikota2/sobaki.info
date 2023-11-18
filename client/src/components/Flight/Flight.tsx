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
	const formattedPrice = price ? price + ' ₽' : 'неизвестно';

	return (
		<article className={classes.wrapper}>
			<div className={classes.segment}>
				<time>{convertDateToHHmm(departure)}</time>
			</div>
			<div className={classes.segment}>
				<time>{convertSecsToMins(duration)}</time>
			</div>
			<div className={classes.segment}>
				<time>{convertDateToHHmm(arrival)}</time>
			</div>
			<div className={classes.segment}>
				<span>{stops}</span>
			</div>
			<div className={classes.segment}>
				<span>{formattedPrice}</span>
			</div>
			<div className={classes.segment}>
				<span>{title}</span>
			</div>
		</article>
	);
});

export default Flight;
