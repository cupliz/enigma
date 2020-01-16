import React from 'react';
import { useSelector } from 'react-redux';
import Clock from './clock';
import Counter from './counter';

function Examples() {
  const { lastUpdate, light } = useSelector(
    state => ({ lastUpdate: state.lastUpdate, light: state.light }),
    []
  );

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
}

export default Examples;
