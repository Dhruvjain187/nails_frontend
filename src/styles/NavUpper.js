import styled from "styled-components";

export const NavUpperCont = styled.div`
    padding: 10px;
    background: #F3F5F7;
    margin-bottom:7px;

    & .flex{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
    }

    & h4{
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        margin: 0;

        a{
            text-decoration: none;
            color: ${({ theme }) => theme.colors.black};
            letter-spacing: normal;
        }

        a:hover{
            text-decoration: underline;
        }
    }

        /* & h4:hover{
            text-decoration: underline;
    } */

    @media(max-width: 720px){
        & h4{
            font-size: 13px;
        }
    }

    @media(max-width: 480px){
        & span{
            display: none;
        }
    }
`