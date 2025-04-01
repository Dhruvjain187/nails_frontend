import styled from "styled-components";

export const ProductContainer = styled.div`
    width: -webkit-calc(100% - 260px);
    max-width: 100%;
    /* display: inline-block; */

@media(max-width: 769px){
    width: 100%;
}
`

export const UpperProductContainer = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.darkblack};
    flex-wrap: wrap;
    justify-content: space-between;

    & h1{
        font-family: "Poppins";
        padding: 25px 0 10px;
        margin: 0;
        font-size: 28px;
        font-weight: 500;
        width: 100%;
    }

    & .total-products{
        padding-top: 10px;
    }

    & .filter-strong{
        display: none;
        background: #eb4159;
        border: 1px solid #eb4159;
        padding: 10px 15px;
        letter-spacing: 1px;
        font-weight: 400;
    }

    & select{
        height: 40px;
        background: #fff;
        margin: 0 0 0 2px;
        padding: 2px 50px 2px 10px;
        border: 1px solid #c2c2c2;
    }

    & .sorter{
        width: auto;
    }

    & i{
         margin: 0 0 0 10px;
    }

    @media(max-width: 769px){
        & h1{
            order: 5;
            padding: 15px 0 0;
        }

        & select{
            padding-right: 20px;
        }

        & .total-products{
            width: 100%;
            margin-top: 5px;
            order: 6;
            padding: 0;
        }

        & .filter-strong{
            display: block;
            color: ${({ theme }) => theme.colors.white};
        }
    }
`