import styled from 'styled-components';
import PrimaryButton from '../atoms/button/PrimaryButton';
import Input from '../atoms/input/Input';

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

type Props = {};
/**
 * Atomic DesiognのMolecuresに相当する検索エリアのデザインパーツ。
 */
const SearchInput: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <SContainer>
      <Input placeholder={'文字を入れてね'} />
      <SButtonWrapper>
        <PrimaryButton>検索するよ</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};
export default SearchInput;
