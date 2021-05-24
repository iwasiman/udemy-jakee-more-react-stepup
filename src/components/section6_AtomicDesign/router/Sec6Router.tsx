import { Switch, Route } from 'react-router-dom';
import Top from '../pages/Top';
import Users from '../pages/Users';

/**
 * ■セクション6: コンポーネントの分割方法 (Atomic Design) 1h10m
 * ●32. Pageの作成 12m
 */
type Props = {};
const Sec6Router: React.FunctionComponent<Props> = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
    </Switch>
  );
};

export default Sec6Router;
