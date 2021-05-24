import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  pisition: fixed;
  botton: 0;
  width: 100%;
`;

type Props = {};
/**
 * Atomic DesiognのTemplateの中で指定するフッタを表す。
 */
const Footer: React.FunctionComponent<Props> = (props: Props) => {
  // childrenと書くだけで、下位のコンポーネントが全部入る。すごい。
  return <SFooter>&copy; 2021 nya---n Inc.</SFooter>;
};
export default Footer;
