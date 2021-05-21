import { ReactElement } from 'react';
import Page1 from '../Page1';
import Page1DetailA from '../Page1/Page1DetailA';
import Page1DetailB from '../Page1/Page1DetailB';

type RouteObj = {
  path: string;
  exact: boolean;
  children: ReactElement;
};
const page1Routes: RouteObj[] = [
  {
    path: '/page1',
    exact: true,
    children: <Page1 />,
  },
  {
    path: '/page1/detailA',
    exact: false,
    children: <Page1DetailA />,
  },
  {
    path: '/page1/detailB',
    exact: false,
    children: <Page1DetailB />,
  },
];
export default page1Routes;
