import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {mainCtgr, subCtgr} from "@/mock/category";
import Image from "next/image";

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
    background-color: #f4f4f4;
    font-weight: bold;
    color: rgb(21, 20, 20);
  }

  & div.desc {
    text-align: center;
  }
`;

const MenuContainer = styled.div`
  padding-left: 20px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f4f4f4;
  .div:last-child {
    margin-right: auto;
  }
`;

const Menu = styled.div`
  text-align: center;
  background-color: #6332ff;
  width: 90px;
  height: 90px;
  background-color: #ededed;
  border-radius: 20px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .menuText {
    font-size: 12px;
    font-weight: bold;
  }

`;

const Container = styled.div`
  display: flex;
`
export const Tab = () => {
    const [currentTab, clickTab] = useState<string>("TOP");
    const [subCtgrs, setSubCtgrs] = useState<any[]>([]);

    const selectMenuHandler = (index: string) => {
        clickTab(index);
        const filteredSubCtgr = subCtgr.filter((el) => el.main === index);
        let all = {
            main: index,
            label: "전체",
            value: "ALL",
            logoImgUrl: "https://cataas.com/cat?width=40&height=40"
        }
        setSubCtgrs([all, ...filteredSubCtgr]);
    };

    useEffect(() => {
        selectMenuHandler("TOP");
    }, [])

    return (<>
        <Container>
            <TabContainer>
                <TabMenu>
                    {mainCtgr.map((el, index) => (<li
                        key={index}
                        className={el.value === currentTab ? "submenu focused" : "submenu"}
                        onClick={() => selectMenuHandler(el.value)}>{el.label}</li>))}
                </TabMenu>
            </TabContainer>
            <MenuContainer>
                    {subCtgrs.map((v, i) => (
                        <Menu key={i}>
                            <Image
                               style={{borderRadius: "50px"}}
                               src={v.logoImgUrl}
                               width={55}
                               height={55}
                               alt="상품이미지"
                            />
                            <p className={"menuText"}>{v.label}</p>
                        </Menu>
                    ))}
            </MenuContainer>
        </Container>
    </>);
};