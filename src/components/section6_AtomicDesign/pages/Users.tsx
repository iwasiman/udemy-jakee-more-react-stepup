import styled from 'styled-components';
import SearchInput from '../molecures/SearchInput';
import UserCard from '../organisms/user/UserCard';
import User from '../User';

const SContainer = styled.div`
  display: flex;
  flexp-direction: column;
  align-items: center;
  padding: 24px;
`;

// 講座の[...Array(10).keys()].map() はTSだとコンパイルエラーになる
const users: User[] = Array.from(new Array(5)).map((v, i) => {
  return {
    id: i,
    name: `ニャン助-${i}`,
    img: 'https://source.unsplash.com/Tn8DLxwuDMA',
    mail: 'aaa@gmail.com',
    phone: '1234-5678',
    company: {
      name: 'ニャッファッファStudio',
    },
    website: 'http://www.google.com/',
  };
});

const SUsersArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grip-gap: 20px;
`;

type Props = {};
/**
 * Atomic DesiognのPagesを表すコンポーネント
 */
const Users: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <h2>ユーザ一覧だよ</h2>
      <SearchInput />
      <SContainer>
        <br />
        <br />
        <SUsersArea>
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </SUsersArea>
      </SContainer>
    </>
  );
};
export default Users;
