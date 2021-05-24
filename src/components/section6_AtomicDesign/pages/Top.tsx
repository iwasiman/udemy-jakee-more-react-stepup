import styled from 'styled-components';

const SContainer = styled.div`
  text-align; center;
`;

type Props = {};
/**
 * Atomic DesiognのPagesを表すコンポーネント
 */
const Top: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <SContainer>
      <h2>トップページだよ</h2>
    </SContainer>
  );
};
export default Top;
