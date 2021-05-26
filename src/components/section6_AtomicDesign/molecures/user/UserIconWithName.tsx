import styled from 'styled-components';
import React, { useContext } from 'react';
import { UserContext } from '../../../section7_GlobalState/providers/UserProvider';

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

type Props = {
  name: string;
  img: string;
};
/**
 * Atomic DesiognのMolecuresに相当するユーザアイコン画像＋名前のセット。
 */
const UserIconWithName: React.FunctionComponent<Props> = (props: Props) => {
  // userをまるごと取得してもいいが、propsの中から最低限のものだけ取得。
  const { name, img } = props;

  // 別ファイルでcreateContext()して作ったUserContextを、ここで引数に渡す。
  const context = useContext(UserContext);
  // 途中のコンポーネントを介さずに、JSXのルートで囲ったUserProviderから {contextName: "ニャン次郎"}が渡ってくる!
  console.log('UserIconWithName コンポーネント context:', context);
  return (
    <SContainer>
      <SImg alt={name} height={260} width={160} src={img} />
      <SName>{name}</SName>
    </SContainer>
  );
};
export default UserIconWithName;
