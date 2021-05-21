import { Link } from 'react-router-dom';
type Props = {};
const Page404: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>404だぞい!</h3>
      <Link to="/">戻るよ</Link>
    </div>
  );
};
export default Page404;
