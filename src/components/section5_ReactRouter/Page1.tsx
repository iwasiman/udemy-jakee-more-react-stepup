import { Link, useHistory } from 'react-router-dom';

type Props = {};
const Page1: React.FunctionComponent<Props> = () => {
  // 遷移時に持っていきたい情報
  //const arr = [...Array<number>(100).keys()]; //TSではコンパイルエラー
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log('arr', arr);

  const history = useHistory();
  const onClickDetailA = () => {
    history.push('/page1/detailA');
  };

  return (
    <div>
      <h3>Page1ですよ</h3>
      <Link to={{ pathname: '/page1/detailA', state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>detailAに飛ぶボタン</button>
    </div>
  );
};
export default Page1;
