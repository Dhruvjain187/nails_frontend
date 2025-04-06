import styled from "styled-components";

export const PaginateProductBasedOnNumber = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

    & select{
        height: 40px;
        background: ${({ theme }) => theme.colors.white};
        border-color: #e5d5d1;
        padding: 2px 50px 2px 10px;
        margin: 0 5px 0 7px;
        width: auto;
    }

    & span{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.darkblack};
        font-weight: 400;
    }

    @media(max-width: 1025px){
        justify-content: center;

        & .page-container{
            width: 100%;
            text-align: center;
        }
    }
`