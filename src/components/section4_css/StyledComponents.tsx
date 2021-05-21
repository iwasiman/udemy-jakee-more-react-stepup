import styled from 'styled-components';
type Props = {};

const SCcontainerStyle = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SCtitleStyle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
const SCbuttonStyle = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

const StyledComponents: React.FunctionComponent<Props> = () => {
  console.log('StyledComponents レンダリング!');
  // ■セクション4: 様々なCSSの当て方に触れる 29m
  // ●15. styled components 6m
  // 別途変数でコンポーネントを定義、<div>→ <ContainerStyle>のように書く。タグがないから分かりにくくないか?
  // StyledComponentsのコンポなのか、importしてきた他のコンポなのか分かりにくいという欠点あり。
  // じゃけえさんは接頭辞Sをつけてる。
  // hoverも利く。

  return (
    <SCcontainerStyle>
      <SCtitleStyle>StyledComponentsだよ</SCtitleStyle>
      <SCbuttonStyle>FIGHT!!</SCbuttonStyle>
    </SCcontainerStyle>
  );
};

export default StyledComponents;
