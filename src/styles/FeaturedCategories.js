import styled from "styled-components";

export const FeatureCont = styled.div`
    /* padding: 0 15px; */
    margin-bottom: 30px;
    font-family: "Roboto";
    padding: 0 15px;

    /* & header{
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        h2{
            font-family: "Poppins";
            font-size: 25px;
            margin: 0;
            color: ${(props) => props.theme.colors.darkblack};
            font-weight: 600;
        }

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            gap:2px;
            text-align: center;
            padding: 0 20px;
            text-decoration: none;
            background: ${(props) => props.theme.colors.pinkish};
        }

        a:hover{
            background: ${(props) => props.theme.colors.brown};    
        }

        span{
            font-size: 12px;
            color: ${(props) => props.theme.colors.white};
            font-weight: 700;
        }

        i{
            display: none;
        }
    } */

    & .cards{
        display: flex;
        margin: 0 -15px;
        /* padding: 0 15px; */

        & div.cards-pd{
            padding:0 15px;
            box-sizing: border-box;
        }

        & div.cards-border{
            border: 1px solid #e5d5d1;
        }

        & h3{
            padding: 0 15px 15px;
            margin: 0;
            font-size: 25px;
            font-weight: 600;
            color: #333;
            /* line-height: 30px; */
            /* color: ${({ theme }) => theme.colors.darkblack}; */
        }

        & a{
            text-decoration: none;
            color: ${({ theme }) => theme.colors.lightblack};    
            display: block;
            padding: 0 15px 15px;
        }

        & a:hover{
            color: ${({ theme }) => theme.colors.brown}
        }

        & img{
            max-width: 100%;
            height: auto;
            object-fit: cover;
            margin-bottom: 20px;
            /* max-height: 350px;
            min-height: 360px;
            aspect-ratio: auto 550 / 376; */
        }
    }



    @media(max-width:770px){
        /* & header{
            h2{
            font-size: 20px;
            font-weight: 500;
        }
    
        a{
            background: white;
            padding: 0;
        }

        a:hover{
            background: white;
        }

        span{
            color: ${(props) => props.theme.colors.pinkish};
            font-weight: 500;
        }

        i{
            display: block;
            color: ${(props) => props.theme.colors.pinkish};
        }
    } */
         
    & .cards{
        & .cards-a{
            display: none;
        }

        & img{
            border-radius: 50%;
        }
        
        & div.cards-border{
            min-width: 165px;
            border: none;
        }

        & h3{
            text-align: center;
            font-size: 16px;
            font-weight: 500;
        }
    }

    & .scroll{
        overflow: auto;
    }

}

    
`

// 1px solid #e5d5d1