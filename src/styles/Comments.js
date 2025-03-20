import styled from "styled-components";

export const CommentContainer = styled.div`
    display:block;
    overflow: hidden;
    font-family: "Roboto";
    margin-top: 15px;
    margin-bottom: 30px;

    & h2{
        margin: 0;
        text-align: center;
        font-family: "Poppins";
        font-size: 25px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.darkblack};
    }

    & p{
        margin: 0 0 15px 0;
        font-weight: 400;
        text-align: center;
        font-size: 17px;
        color: #757575;
    }
    
    & div.slick-track{
        display: flex;
        width: 2519px ;
    }

    & .slick-slide{
        margin: 0 10px 0 10px;
    }

    /* & .comment-margin{
        margin: 0 10px 0 10px;
    } */

    & .comment{
        max-width: 100%;
        border-radius: 10px;
        border: 2px solid #ffebed;

        & h3{
        font-weight: 400;
        font-size: 16px;
        color: #000;
        margin: 0;
        background: #ffebed;
        padding: 15px;
        text-align: center;
    }

    & p{
        font-weight: 400;
        font-size: 16px;
        color: #2d2c2c;
        margin: 0;
        padding: 15px;
        line-height: 1.42857143;
    }
    }


    @media(max-width: 780px){
        & header{
            padding: 15px;
        }

        & h2{
            font-size: 18px;
            font-weight: 600;
        }

        & p.exception{
            margin: 0;
            line-height: 28px;
            font-size: 13px;
        }
    }
`