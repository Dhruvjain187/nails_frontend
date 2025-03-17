import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: "Roboto";
    margin-bottom: 30px;

    & picture{
        display: block;
    }

    & .text{
        padding-left: 50px;
        max-width: 590px;

        h1{
            font-family: "Poppins";
            font-size: 25px;
            line-height: 30px;
            margin: 0 0 20px 0;
            color: #333333;
            font-weight: 500;
        }

        p{
            font-size: 16px;
            color: #757575;
            line-height: 28px;
            margin: 0 0 20px 0;
            font-weight: 400;
        }
    }

    & img{
        height: auto;
        max-width:100% ;
        object-fit: cover;
    }

    @media(max-width:1160px){
        & .text{
            h1{
                font-size: 40px;
                line-height: 40px;
            }
        }
    }

    @media(max-width:700px){
        display: block;

        & .text{
            max-width: 100%;
            padding: 20px 0 0 0;
            text-align: center;

            h1{
                font-size: 20px;
                line-height: 25px;
                font-weight: 700;
            }
        }

        & a{
            margin:0 auto 0 auto;
        }
    }

`