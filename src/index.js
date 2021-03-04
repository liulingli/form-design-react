import React from 'react';
import ReactDOM from 'react-dom';
import './startup.scss';

import ReactFormDesign from './lib';

ReactDOM.render(
  <ReactFormDesign isEdit={true} autoWidth/>,
  document.getElementById('root')
);



