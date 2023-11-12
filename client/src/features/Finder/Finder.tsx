import React, {FC, useState} from "react"
import { Formik, Field, Form, FormikHelpers } from 'formik';

import classes from './Finder.module.scss';
import {AllStations} from "../../types";

export interface Values {
  from: string;
  to: string;
}

interface Props {
  setParams?: React.Dispatch<React.SetStateAction<Values>>;
  allStations?: AllStations[];
}

const Finder: FC<Props> = ({setParams, allStations}) => {
  const [swap, setSwap] = useState(false);

 // console.log('finder');
  const titles: string[] | undefined = allStations?.map(({stations}) => stations.map(({title}) => title)).flat();

  return (
    <>
      <Formik
        initialValues={{
          from: '',
          to: '',
        }}
        onSubmit={( values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          if (!swap && setParams) {
            setParams({
              from: values.from,
              to: values.to
            });
          }
          if (swap && setParams) {
            setParams({
              from: values.to,
              to: values.from
            });
          }
          setSubmitting(false);
        }}
      >
        <Form>
          <Field id={!swap ? 'from' : 'to'} name={!swap ? 'from' : 'to'} placeholder="Откуда" list="megalist" />
          {/*<datalist id="megalist">*/}
          {/*  {titles?.map((title) => <option value={title} key={title} />)}*/}
          {/*</datalist>*/}
          <button
            type="button"
            onClick={() => setSwap(!swap)}
            className={classes.swap}
            data-testid="swapper"
          >⇄</button>

          <Field id={swap ? 'from' : 'to'} name={swap ? 'from' : 'to'} placeholder="Куда" list="megalist"/>

          <button type="submit" data-testid="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default Finder

