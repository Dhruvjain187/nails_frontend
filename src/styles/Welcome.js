import styled from "styled-components";

export const WelcomeCont = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    border: 1px solid #f3f5f7;
    font-family: "Roboto";
    text-align: center;
    margin-bottom: 30px;


    & li{
        margin: 0;
        padding: 5px;
    }

    & article{
        padding: 15px;
        border-right: 1px solid #f3f5f7;
    }

    & .exception{
        border-right: none;
    }

    & picture{
        display: block;
        /* text-align: center; */
    }

    & img{
        height: auto;
        max-width: 100%;
    }

    & h3{
        font-size: 15px;
        color: #2d2c2c;
        font-weight: 600;
        margin: 15px 0 15px 0;
    }

    & p{
        margin: 0;
        font-size: 13px;
        color: #757575;
        line-height: 20px;
        font-weight: 400;
    }

    @media(max-width: 750px){
        overflow-x: auto;
        text-align: start;
 
        & li{
            min-width:200px;
        }

        & article{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        & h3{
            margin: 0;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #141718;
        }
    }
`