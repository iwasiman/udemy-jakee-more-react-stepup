import { ReactElement } from 'react';
import styled from 'styled-components';
import Header from '../atoms/layout/Header';

// 子供に任意の数の入れ子のコンポーネントやタグを入れる時は、下のようにreactElementの配列型にする。
type Props = {
  children: ReactElement[];
};
/**
 * Atomic DesiognのTemplateに相当するヘッダーのみのテンプレート。
 */
const HeaderOnlyLayout: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  // childrenと書くだけで、下位のコンポーネントが全部入る。すごい。
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default HeaderOnlyLayout;
