import { RouteConfig } from 'react-router-config';
import { PageModel, LogicModel, Preview } from '../view';

const routesConfig: RouteConfig[] =
  [
    {
      path: '/',
      exact: true,
      component: PageModel,
    },
    {
      path: '/flow',
      component: LogicModel,
    },
    {
      path: '/preview',
      component: Preview,
    }
  ];

export default routesConfig;
