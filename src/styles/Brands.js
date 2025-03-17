import styled from "styled-components";

export const BrandContainer = styled.div`
    margin-bottom: 30px;
    font-family: "Roboto";

    & .brand{
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        overflow:auto;
    }

    & li{
        margin: 0 10px;


        & .icon-cont{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 12px;
            border-radius: 50%;
            height: 138px;
            width: 138px;
            max-width: 170px;
            overflow: hidden;
            border: 2px solid #f5f5f5;
        }

        & .icon-cont:hover{
            border:${(props) => `2px solid ${props.theme.colors.brown}`}
        }

        & .icon-cont:hover ~p{
            color:${(props) => props.theme.colors.brown};
        }

        & img{
            height: auto;
            max-width: 100%;
        }

        & p{
            text-align: center;
            font-weight:400;
            font-size:14px;
            color:black;
        }
    }
`