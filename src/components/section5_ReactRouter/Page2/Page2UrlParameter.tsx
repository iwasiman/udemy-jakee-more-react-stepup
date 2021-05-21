import { useParams, useLocation } from 'react-router-dom';

type Props = {};
const Page2UrlParameters: React.FunctionComponent<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  // useLocation()の戻り値はJSオブジェクト。search: "?name=patty&home=MapleTown" のように入っている。
  console.log(location);
  // JS自体の機能のURLSearchParamsが使える。
  const query = new URLSearchParams(location.search);
  return (
    <div>
      <h3>Page2UrlParametersですよ</h3>
      <p>
        受け取ったパラメーター id: {id}
        <br />
        クエリパラメータ― name: {query.get('name')} home: {query.get('home')}
      </p>
    </div>
  );
};
export default Page2UrlParameters;
