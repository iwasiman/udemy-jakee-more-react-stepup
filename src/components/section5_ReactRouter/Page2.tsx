import { Link } from 'react-router-dom';
type Props = {};
const Page2: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Page2ですよ</h3>
      <Link to="/page2/666">URLパラメータを指定してPage2UrlParametersへ</Link>
      <br />
      <Link to="/page2/666?name=patty&home=MapleTown">
        クエリ指定してPage2UrlParametersへ
      </Link>
      <br />
    </div>
  );
};
export default Page2;
