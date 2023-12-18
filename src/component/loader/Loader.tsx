import styles from './Loader.module.scss';
import {RotatingLines} from "react-loader-spinner";
import styled from "styled-components";

const BasicWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
const Loading = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export default function Loader({basic}: { basic: boolean }) {
    if (basic) {
        return (<BasicWrapper>
                <RotatingLines
                    strokeColor='grey'
                    strokeWidth='5'
                    animationDuration='0.75'
                    width='30'
                    visible={true}
                />
            </BasicWrapper>

        )
    }

    return (<Wrapper>
        <Loading>
            <RotatingLines
                strokeColor='grey'
                strokeWidth='5'
                animationDuration='0.75'
                width='30'
                visible={true}
            />
        </Loading>
    </Wrapper>)
}