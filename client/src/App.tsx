import React, { useEffect, useState, useLayoutEffect, Suspense } from 'react';
import axios from "axios";
import dayjs from 'dayjs';

import RailwayMap from "./features/RailwayMap/RailwayMap";
import Loader from "./components/Loader/Loader";
import {key} from './constants/key';
import {thnxToYandex} from "./constants/thnxToYandex";
import {today} from "./constants/dates";
import {capitalize} from "./helpers/capitalize";
import {findYaCode} from "./helpers/findYaCode";
import {AllStations, Status} from "./types";
import './App.css';

export interface Params {
  from: string;
  to: string;
}

const Title = React.lazy(() => import('./features/Title/Title'));
const Finder = React.lazy(() => import('./features/Finder/Finder'));
const Schedule = React.lazy(() => import('./features/Schedule/Schedule'));

function App() {
  const [params, setParams] = useState<Params>({from: "", to: ""})

  const [allStations, setAllStations] = useState<AllStations[]>([]);

  const [schedule, setSchedule] = useState({});

  const [currentDate, setCurrentDate] = useState<string>(today);

  const [status, setStatus] = useState<Status>('idle');

  const [showMap, setShowMap] = useState(false);

  useLayoutEffect(() => {
    axios.get(`http://127.0.0.1:3001/`)
      .then((res) => setAllStations(res.data))
      .catch(e => console.error(e))
  }, [setAllStations]);

  useEffect(() => {
    const {from, to} = params;

    if (from !== undefined && to !== undefined && from.length > 0 && to.length > 0 && allStations.length > 0) {
      const fromCode = findYaCode(capitalize(from), allStations);
      const toCode = findYaCode(capitalize(to), allStations);
      setStatus('loading');
      axios.get(`/v3.0/search/?apikey=${key}&format=json&from=${fromCode}&to=${toCode}&lang=ru_RU&page=1&date=${currentDate}`)
        .then((res) => {
          setStatus('loaded');
          setSchedule(res.data)
        })
        .catch((e) => {
          setStatus('error');
          console.error(e)
        })
    }
  }, [params, currentDate, allStations])

  // const titles: string[] = allStations?.map(({stations}) => stations.map(({title}) => title)).flat();
// console.log(titles);
  console.log('👾', dayjs(new Date('2023-04-10T11:42:11.716Z')));
  return (
    <div className="App">
      <Suspense fallback={<div>Загрузка...</div>}>
       <Title currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      </Suspense>
      <button type="button" onClick={() => setShowMap(!showMap)}>show map</button>
      {!showMap && <Suspense fallback={<div>Загрузка...</div>}>
        <Finder
          setParams={setParams}
          allStations={allStations}
        />
      </Suspense>}
      {showMap && <RailwayMap allStations={allStations} />}
      {status === 'loading' && <Loader />}

      {status === 'loaded' &&
        <>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Schedule schedule={schedule} currentDate={currentDate} status={status}/>
          </Suspense>
          <footer style={{
            position: 'relative',
            left: 0,
            bottom: 0,
            width: '100%',
          }}>
            <p>{thnxToYandex}</p>
          </footer>
        </>
      }
    </div>
  );
}

export default App;
