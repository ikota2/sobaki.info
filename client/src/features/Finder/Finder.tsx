import React, {Component, FC, useState} from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';

import {AllStations} from "../../types";
import classes from './Finder.module.scss';
// ⇄
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

  return (
    <div className={classes.container}>
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
          <Field
            id={!swap ? 'from' : 'to'}
            name={!swap ? 'from' : 'to'}
            placeholder="Откуда" list="megalist"
            style={{height: '30px'}}
          />
          <button
            type="button"
            onClick={() => setSwap(!swap)}
            data-testid="swapper"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width='16px' height='16px'>
              <g id="_82-Arrow_Exchange" data-name="82-Arrow Exchange">
                <path d="M23.29,15.29l1.41,1.41,7-7a1,1,0,0,0,0-1.41l-7-7L23.29,2.71,28.59,8H0v2H28.59Z"/>
                <path d="M8.71,16.71,7.29,15.29l-7,7a1,1,0,0,0,0,1.41l7,7,1.41-1.41L3.41,24H32V22H3.41Z"/>
              </g>
            </svg>
          </button>

          <Field id={swap ? 'from' : 'to'} name={swap ? 'from' : 'to'} placeholder="Куда" list="megalist"
                 style={{height: '30px', borderRadius: '5px'}}
          />

          <button type="submit" data-testid="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width='20px' height='25px'>
              <g id="_49-Search" data-name="49-Search">
                <path d="M21.15,19.74a12,12,0,1,0-1.41,1.41L30.29,31.71l1.41-1.41ZM12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/>
              </g>
            </svg>
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Finder

