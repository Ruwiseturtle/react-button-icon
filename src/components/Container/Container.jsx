import React from 'react';
import css from './Container.module.css';

const Container = ({ children }) => (
  <div className={css.Container}>
    <h1 className={css.title}>Counter</h1>
    <div className={css.btnIcons}>{children}</div>
  </div>
);

export default Container;
