import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";

const Filter = styled.div`

`;
const Bar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;

  .input {
    width: 90%;
    border: 1px solid #bbb;
    padding: 10px 12px;
    font-size: 12px;
  }
  
  .icon {
    font-size: 20px;
    width: 10%;
  }
`;

export default function SearchFilter() {
    return <Filter>
        <Bar>
            <input className="input" type="search" placeholder="상품 검색"/>
            <IoSearchOutline className="icon" />
        </Bar>
    </Filter>
}