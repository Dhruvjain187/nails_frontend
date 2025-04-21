import styled from "styled-components";

export const Btn = styled.a`
    &{
            font-family: "Roboto";
            font-weight: 500;
            line-height:${(props) => props.height || "1"};
            letter-spacing: 1.38px;
            display: inline-block;
            text-align: center;
            height: ${(props) => props.height || "auto"};
            font-size: ${(props) => props.size || "14px"};
            border-radius: 5px;
            text-align: center;
            padding:${(props) => props.padding || "10px"};
            text-decoration: none;
            color: ${({ theme }) => theme.colors.white};
            background: ${(props) => props.background || "#8e7069"};
            /* background: ${({ theme }) => theme.colors.brown}; */
        }

    &:hover{
        background: ${(props) => props.backgroundhover || "#eb4159"};
        /* background: ${({ theme }) => theme.colors.pinkish};     */
        }
`


export const ProductButton = styled.button`
    &{
            overflow: hidden;
            outline: none;
            border: none;
            font-family: "Roboto";
            font-weight: 500;
            line-height:${(props) => props.height || "1"};
            letter-spacing: 1.38px;
            display: inline-block;
            text-align: center;
            height: ${(props) => props.height || "auto"};
            font-size: ${(props) => props.size || "14px"};
            border-radius: 5px;
            text-align: center;
            padding:${(props) => props.padding || "10px"};
            text-decoration: none;
            color: ${({ theme }) => theme.colors.white};
            background: ${(props) => props.background || "#8e7069"};
            /* background: ${({ theme }) => theme.colors.brown}; */
        }

    &:hover{
        background: ${(props) => props.backgroundhover || "#eb4159"};
        /* background: ${({ theme }) => theme.colors.pinkish};     */
        }

        & span{
            position: relative;
            padding-left: 30px;
        }

        & span::before{
            content: "";
            background-image: url("https://www.lanailsupplies.com/static/version1744890393/frontend/Commercepundit/breeze-lanails/en_US/images/minicart-white.svg");
            position: absolute;
            left: 0;
            top: -2px;
            background-size: 15px;
            background-position: center;
            background-repeat: no-repeat;
            height: 20px;
            width: 20px;

        }
`