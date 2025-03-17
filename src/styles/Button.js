import styled from "styled-components";

export const Btn = styled.a`
    &{
            font-family: "Roboto";
            font-weight: 500;
            line-height: 1;
            letter-spacing: 1.38px;
            display: inline-block;
            font-size: 14px;
            border-radius: 5px;
            text-align: center;
            padding:10px;
            text-decoration: none;
            color: ${(props) => props.theme.colors.white};
            background: ${(props) => props.theme.colors.brown};
        }

    &:hover{
        background: ${(props) => props.theme.colors.pinkish};    
        }
`