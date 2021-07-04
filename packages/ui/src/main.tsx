import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Top, Bar } from './view';
import routes from './routes';
import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Top />
      <Bar />
      <div className="main">
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('ui')
);
