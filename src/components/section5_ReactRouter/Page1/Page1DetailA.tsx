import { useLocation, useHistory } from 'react-router-dom';

type Props = {};
const Page1DetailA: React.FunctionComponent<Props> = () => {
  const loc = useLocation();
  // {pathname: "/page1/detailA", state: Array(5), search: "", hash: "", key: "yag1v0"}
  console.log('useLocation()で渡ってきたもの', loc);
  // API呼び出しで1件分のJSONがもうあったら、一覧画面から渡してこれたりする。

  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h3>Page1DetailAですよ</h3>
      <button onClick={onClickBack}>useHistory()を使って戻るよ</button>
    </div>
  );
};
export default Page1DetailA;
