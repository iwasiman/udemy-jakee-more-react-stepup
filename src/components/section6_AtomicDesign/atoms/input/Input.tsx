import styled from 'styled-components';

type Props = {
  placeholder: string;
};
const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;

/**
 * Atomic DesiognのAtomに相当するinput。
 * 親でのコンポーネント指定時のタグの間の文字列をボタン文字列に使います。
 */
const Input: React.FunctionComponent<Props> = (props: Props) => {
  const { placeholder = '' } = props;
  return <SInput type="text" placeholder={placeholder} />;
};
export default Input;
