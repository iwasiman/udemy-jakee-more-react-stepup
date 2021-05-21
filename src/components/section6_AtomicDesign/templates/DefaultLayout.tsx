import { ReactElement } from 'react';
import Header from '../atoms/layout/Header';
import Footer from '../atoms/layout/Footer';

// 子供に任意の数の入れ子のコンポーネントやタグを入れる時は、下のようにreactElementの配列型にする。
type Props = {
  children: ReactElement[];
};
/**
 * Atomic DesiognのTemplateに相当するテンプレート。
 */
const DefaultLayout: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  // childrenと書くだけで、下位のコンポーネントが全部入る。すごい。
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default DefaultLayout;
