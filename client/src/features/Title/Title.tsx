import React, {FC, Dispatch, SetStateAction} from 'react';

import {today, tomorrow} from "../../constants/dates";

import classes from './Title.module.scss';

interface Props {
	currentDate: string;
	setCurrentDate: Dispatch<SetStateAction<string>>;
}

const Title: FC<Props> = ({currentDate, setCurrentDate}) => {
	const handleSetCurrentDate = () => {
		if (currentDate === today) {
			setCurrentDate(tomorrow);
		} else {
			setCurrentDate(today);
		}
	}

	return (
		<header>
			<h1>
				{`Расписание собак на `}
				<span
					onClick={handleSetCurrentDate}
					className={classes.date}
					data-testid="value"
				>{currentDate === today ? ' сегодня' : ' завтра'}</span>
			</h1>
		</header>
	);
};

export default Title;
