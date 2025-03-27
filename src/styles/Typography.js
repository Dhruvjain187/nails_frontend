import styled from "styled-components";

export const Span = styled.span`
    font-family: "Poppins";
    color: ${({ theme }) => theme.colors.darkblack};
    font-size: 4rem;
    line-height: 40px;
    font-weight: 500;

    @media(max-width:770px){
        font-size: 2.5rem;
    }
`


export const H1 = styled.h1`
    margin: 0;
    padding-top:25px;
    display: inline-block;
    margin-bottom: 10px;
`

export const SignH1 = styled.h1`
    padding: 50px 0 30px;
    margin-bottom: 0;
    margin-top: 0;
    display: inline-block;

    @media(max-width:769px){
        &{
            padding: 20px 0 15px;
        }
    }
`