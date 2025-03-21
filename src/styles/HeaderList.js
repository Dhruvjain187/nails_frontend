import styled from "styled-components";

export const HeaderListCont = styled.nav`
    padding: 0 15px;
    margin-bottom: 10px;
    background: #f3f5f7;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    display: none;


    ${({ theme }) => theme.size.md}{
        display: block;

        & ul{
            margin: 0;
            display: flex;
            flex-wrap: none;
            justify-content: space-between;
            gap: 15px;
            padding: 10px 0;
            overflow: auto;
        }

        & li{
            list-style: none;
        }

        & li:hover a{
            color: ${({ theme }) => theme.colors.pinkish};
            text-decoration: underline;
        }

        & a{
            color: #000;
            font-size: 14px;
            text-decoration: none;
        }
    }

    ${({ theme }) => theme.size.sm}{
        & a{
            white-space: nowrap;
        }       
    }
`