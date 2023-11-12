import React, {FC, memo, useState} from "react"

import {Segment, Status} from "../../types";
import Flight from "../../components/Flight/Flight";
import {separatePastAndFuture} from "../../helpers/separatePastAndFuture";

interface Props {
  schedule: any;
  currentDate: string;
  // scheduleStatus: Status;
  status: Status;
}

const Schedule: FC<Props> = memo(({schedule}) => {
  const [showPast, setShowPast] = useState(false);

  if (schedule === undefined || Object.values(schedule).length === 0) {
    return null;
  }

  const {date, from, to} = schedule.search;
  const {segments} = schedule;
  const {past, future} = separatePastAndFuture(segments);

  return (
    <>
      <div data-testid="topTitleFrom">Откуда: {from.title}</div>
      <div>Куда: {to.title}</div>
      <div>Когда: {new Date(date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</div>

      {showPast && past.map((segment: Segment, i: number) => {
        return (
          <Flight
            key={i + ""}
            stops={segment.stops}
            arrival={segment.arrival}
            departure={segment.departure}
            duration={segment.duration}
            title={segment.thread.short_title}
            subtype={segment.thread.transport_subtype.title}
            price={segment.tickets_info?.places[0].price.whole}
          />
        )
      })}

      <button
        type="button"
        onClick={() => setShowPast(!showPast)}
      >
        {!showPast ? 'Показать ушедние собаки' : 'Скрыть ушедшие собаки'}
      </button>
      {future.map((segment: Segment, i: number) => {
        return (
          <Flight
            key={i + ""}
            stops={segment.stops}
            arrival={segment.arrival}
            departure={segment.departure}
            duration={segment.duration}
            title={segment.thread.short_title}
            subtype={segment.thread.transport_subtype.title}
            price={segment.tickets_info?.places[0].price.whole}
          />
        )
      })}
    </>
  )
})

export default Schedule
