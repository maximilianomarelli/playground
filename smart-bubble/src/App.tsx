import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';

import { data } from './data';
import { NetworkDiagram } from './NetworkDiagram';

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <NetworkDiagram data={data} width={width || 400} height={height || 400} />
  );
}

export default App;
