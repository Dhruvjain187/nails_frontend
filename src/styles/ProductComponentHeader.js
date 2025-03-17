import styled from "styled-components";

export const ProductHeader = styled.header`
        & {
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
            background: ${(props) => props.theme.colors.brown};
        }

        a:hover{
            background: ${(props) => props.theme.colors.pinkish};    
        }

        span{
            font-size: 12px;
            color: ${(props) => props.theme.colors.white};
            font-weight: 700;
        }

        i{
            display: none;
        }
    }




    @media(max-width:770px){
        & {
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
    }
}
`