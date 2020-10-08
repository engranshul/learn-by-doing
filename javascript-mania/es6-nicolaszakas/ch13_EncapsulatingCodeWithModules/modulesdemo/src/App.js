import React from 'react';
import increment, { num, add, substract } from './modules/moduleA';
import  * as modb from './modules/moduleB';

import  modbdefault from './modules/moduleB';


function App() {
  return (
    <div className="App">
      <div className="moda">
        <h3>hello world..</h3>
        {increment()}
        {num}
      </div>
      <div className="modbdefault">
        <h3>hello world..</h3>
        {modbdefault(10)}
        {modb.num}
      </div>
    </div>
  );
}

export default App;
