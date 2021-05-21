import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

// ライブラリが提供しているコンポーネントも拡張できる。
const SLink = styled(Link)`
  margin: 0 8px;
`;

type Props = {};
/**
 * Atomic DesiognのTemplateの中で指定するヘッダを表す。
 */
const Header: React.FunctionComponent<Props> = (props: Props) => {
  // childrenと書くだけで、下位のコンポーネントが全部入る。すごい。
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/user">USER</SLink>
      <br />
    </SHeader>
  );
};
export default Header;
