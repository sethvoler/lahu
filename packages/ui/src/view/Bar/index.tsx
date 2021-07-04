import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageIcon, FlowIcon } from '../../assets';
import './index.less';

const TABS = [
  {
    name: 'page',
    icon: <PageIcon />,
    path: '/',
  },
  {
    name: 'flow',
    icon: <FlowIcon />,
    path: '/flow',
  }
];

const Bar: React.FC = () => {
  return <div className="bar">
    {
      TABS.map(({ name, path, icon }) => {
        return <div className="bar-name" key={name}>
          <NavLink exact to={path} className="normal" activeClassName="active">{icon}</NavLink>
        </div>
      })
    }
  </div>;
};

export default Bar;
