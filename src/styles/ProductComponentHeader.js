import styled from "styled-components";

export const ProductHeader = styled.header`
        & {
        /* padding: 0 15px; */
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        h2{
            font-family: "Poppins";
            font-size: 25px;
            margin: 0;
            color: ${({ theme }) => theme.colors.darkblack};
            font-weight: 500;
        }

        a{
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap:2px;
            letter-spacing: 1.38px;
            text-align: center;
            padding: 0 20px;
            border-radius: 5px;
            text-decoration: none;
            background: ${({ theme }) => theme.colors.brown};
        }

        a:hover{
            background: ${({ theme }) => theme.colors.pinkish};    
        }

        span{
            /* font-size: 12px; */
            color: ${({ theme }) => theme.colors.white};
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
            font-size: 12px;
            background: white;
            padding: 0;
        }

        a:hover{
            background: white;
        }

        span{
            color: ${({ theme }) => theme.colors.pinkish};
            font-weight: 500;
        }

        i{
            display: block;
            color: ${({ theme }) => theme.colors.pinkish};
        }
    }
}
`