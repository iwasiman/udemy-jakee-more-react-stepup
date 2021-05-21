import { ReactElement } from 'react';
import Page2 from '../Page2';
import Page2UrlParameters from '../Page2/Page2UrlParameter';

type RouteObj = {
  path: string;
  exact: boolean;
  children: ReactElement;
};
const page2Routes: RouteObj[] = [
  {
    path: '/page2',
    exact: true,
    children: <Page2 />,
  },
  {
    path: '/page2/:id',
    exact: false,
    children: <Page2UrlParameters />,
  },
];
export default page2Routes;
