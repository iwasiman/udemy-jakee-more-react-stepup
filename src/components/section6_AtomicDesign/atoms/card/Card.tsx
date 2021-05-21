import { ReactElement } from 'react';
import styled from 'styled-components';

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

// 子供に任意の数の入れ子のコンポーネントやタグを入れる時は、下のようにreactElementの配列型にする。
type Props = {
  children: ReactElement[];
};
/**
 * Atomic DesiognのAtomに相当するカード。
 */
const Card: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  // childrenと書くだけで、下位のコンポーネントが全部入る。すごい。
  return <SCard>{children}</SCard>;
};
export default Card;
