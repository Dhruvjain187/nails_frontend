import styled from "styled-components"
export const CardContainer = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    margin: 15px 0;
    padding-bottom: 15px;

    & li{
        width: 25%;
    }

    @media(max-width: 1305px){
        & li{
            width: 33.333%;
        }   
    }

    @media(max-width: 1025px){
        & li{
            width: 50%;
        }   
    }

    @media(max-width: 500px){
        & li{
            width: 100%;
        }   
    }
`