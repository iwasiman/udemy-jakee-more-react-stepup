import styled from 'styled-components';
import { User } from '../../../../App';
import Card from '../../atoms/card/Card';
import UserIconWithName from '../../molecures/user/UserIconWithName';

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word; /* 文字が飛び出すのを防止*/
  }
`;

type Props = {
  user: User;
};
// 親から <UserCard user={user} /> のようにJSオブジェクトをpropsで渡す場合は、
// ここでのtype PropsはUser型ではだめ。その中のキーuserがUser型だと認識される。
/**
 * Atomic DesiognのOrganismに相当するユーザーカード。
 */
const UserCard: React.FunctionComponent<Props> = (props: Props) => {
  const { user } = props;

  return (
    <Card>
      <UserIconWithName name={user.name} img={user.img} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WebSite</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};
export default UserCard;
