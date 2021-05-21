import styled from 'styled-components';
import BaseButton from './BaseButton';

type Props = {
  children: string;
};
// 以下のように指定すると、CSSに関しても親クラスの設定の継承ができる!!!
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

/**
 * Atomic DesiognのAtomに相当するプライマリーボタン。
 * 親でのコンポーネント指定時のタグの間の文字列をボタン文字列に使います。
 */
const PrimaryButton: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};
export default PrimaryButton;
