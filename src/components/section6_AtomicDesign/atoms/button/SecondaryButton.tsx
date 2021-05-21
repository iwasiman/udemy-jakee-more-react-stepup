import styled from 'styled-components';
import BaseButton from './BaseButton';

type Props = {
  children: string;
};
const SButton = styled(BaseButton)`
  background-color: #11999e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &: hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

/**
 * Atomic DesiognのAtomに相当するボタン。
 * 親でのコンポーネント指定時のタグの間の文字列をボタン文字列に使います。
 */
const SecondaryButton: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};
export default SecondaryButton;
