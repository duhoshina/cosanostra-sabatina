import styled from "styled-components";

export const HeaderStyled = styled.header`
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5em;
        max-width: 1440px;
        margin: auto;
        border-bottom: 0.2px solid rgb(255, 255, 255, 0.1);

        @media (max-width: 460px) {
            justify-content: center;
            flex-direction: column;
            gap: 10px;
        }
    `;

export const Logo = styled.img`
        width: 65px;
        height: 65px;
        transition: 0.3s ease-out;

        &:hover {
            cursor: pointer;
            transform: scale(1.3)
        }

        @media (max-width: 440px) {
            margin-bottom: 15px;
        }
    `;

export const Navigation = styled.nav`
        @media (max-width: 440px) {
            margin: auto;
        }
    `;

export const UnorderedList = styled.ul`
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 20px;
    `;

export const ListItem = styled.li`
        font-weight: bold;
        text-align: center;
        padding: 15px 30px;
        border-radius: 15px;
        transition: 0.4s ease;

        &:hover {
            cursor: pointer;
            background-color: red;
            transform: scale(1.04);
        };
    `;

export const ListItemSelected = styled.li`
        font-weight: bold;
        text-align: center;
        padding: 15px 30px;
        border-radius: 15px;
        background-color: red;
    `;