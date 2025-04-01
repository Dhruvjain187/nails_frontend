import styled from "styled-components";

export const BreadCrumbsContainer = styled.div`
    border-bottom: 1px solid #e5d5d1;
    margin: 0;
    padding: 15px 0 10px;
    font-family: "Roboto";

    & ul{
        display: flex;
        padding: 0 15px;
        /* min-height: 40px; */
        margin: 0;
        align-items: center;

    }

    & li{
        vertical-align: top;
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
    }

    & a{
        border-radius: 5px;
        /* background: #f6f2f1; */
        display: block;
    }

    & .icon::after{
        content: "";
        /* z-index: 11; */
        width: 6px;
        height: 6px;
        border-top: 1px solid #2d2c2c;
        border-left: 1px solid #2d2c2c;
        transform: rotate(135deg);
        margin: 10px;
    }

    & strong{
        color: ${({ theme }) => theme.colors.blacklt};
        font-size: 15px;
        font-weight: 500;
    }

    @media(max-width: 750px){
        display: none;
    }

`