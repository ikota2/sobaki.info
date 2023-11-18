import React from 'react';
import {thnxToYandex} from '../../constants';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>{thnxToYandex}</p>
    </footer>
  );
};

export default Footer;
