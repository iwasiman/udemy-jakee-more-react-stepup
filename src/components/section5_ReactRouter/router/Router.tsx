import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Page2 from '../Page2';
import page1Routes from './Page1Routes';
import page2Routes from './Page2Routes';
import Page404 from '../Page404';

/**
 * ■セクション5: ルーティングの基礎(React Router) 49m
 * ●19. ネストされたページ遷移 9m
 * ●20. ルート定義の分割 9m
 * ルートコンポ―ネントのJSX部分に<Switch> <Route/> <Route/> </Switch> をずらずら書いていくと分かりづらいため、
 * その部分を抜き出したルーター用コンポーネントです。中でさらに配列を使ってループしています。

 */
type Props = {};
const Router: React.FunctionComponent<Props> = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* propsからurlを取り出すと常に"/page1"が入っている */}
            {/*
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
             */}
            {page1Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={() => (
          <Switch>
            {page2Routes.map((route) => {
              return (
                <Route key={route.path} exact={route.exact} path={route.path}>
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route exact path="/page2">
        <Page2 />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;
