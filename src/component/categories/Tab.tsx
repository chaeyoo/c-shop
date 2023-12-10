import {useState} from 'react';
import styled from 'styled-components';
import {mainCtgr} from "@/mock/category";

const TabContainer = styled.div`
  width: 25%;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
`;
const TabMenu = styled.ul`
  color: rgb(188, 188, 188);
  display: flex;
  flex-direction: column;
  
  .submenu {
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
  }

  .focused {
    background-color: #dcdcdc;
    font-weight: bold;
    color: rgb(21, 20, 20);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  width: 75%;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
`
export const Tab = () => {
    const [currentTab, clickTab] = useState<string>("TOP");


    const selectMenuHandler = (index: string) => {
        clickTab(index);
        // 클릭했을 때 메인 밸류로 서브 카테고리 필터해서 뿌려주기
    };

    return (<>
        <Container>
            <TabContainer>
                <TabMenu>
                    {mainCtgr.map((el, index) => (<li
                        key={index}
                        // className={index === currentTab ? "submenu focused" : "submenu"}
                        onClick={() => selectMenuHandler(el.value)}>{el.label}</li>))}
                </TabMenu>
            </TabContainer>
            <Desc>
                <p>서브카테고리목록</p>
            </Desc>
        </Container>
    </>);
};