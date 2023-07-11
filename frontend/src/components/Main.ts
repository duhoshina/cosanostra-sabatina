import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    max-width: 1340px;
    width: 100vw;
    margin: auto;
`;

export const MainHome = styled(Main)`
    min-height: 65vh;
    padding: 20px 0px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
`;

export const MainLogin = styled(Main)`
    width: 80%;
    max-width: 1440px;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    margin: auto;
    padding: 50px 0px;
`;

export const MainSabatina = styled(Main)`
    justify-content: center;
    align-items: center;
    height: 100vh;
`;