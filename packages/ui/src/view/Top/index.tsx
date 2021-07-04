import React from 'react';
import { NavLink } from 'react-router-dom';
import request from '../../request';

import './index.less';

request({ endPoint: '/page', method: 'POST', data: { 'ok': 'test' } });

const Top: React.FC = () => {
  return <div className="top">
    <div></div>
    <div>
      {
        ['预览'].map(text => {
          return <NavLink key={text} exact to='./preview' className="normal" activeClassName="active">
            <span className="top-btn">{text}</span>
          </NavLink>;
        })
      }
    </div>
  </div>;
};

export default Top;
