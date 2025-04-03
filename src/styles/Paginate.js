import styled from "styled-components";

export const PaginateContainer = styled.div`
    overflow: hidden;

    & .pagination{
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        row-gap: 10px;
    
        & :first-child .page-link{
            /* width: auto ; */
            border:none;
        }

        & :last-child .page-link{
            /* width: auto; */
            border:none;
        }

        & i{
            line-height:unset;
        }
    }

    & .page-item{
        cursor: pointer;
        list-style: none;
        padding: 0 3px;
    }

    & .page-link{
        display: inline-block;
        height: 40px ;
        width: 40px ;
        border: 1px solid #e5d5d1;
        text-align: center;
        line-height: 40px;
    }

    & .break{
        list-style: none;
        height: 40px;
        padding: 0 3px;

        & a{
            display: inline-block;
            height: 40px ;
            width: 40px ;
            text-align: center;
            line-height: 40px;
        }
    }

    & .pagination .active .page-link{
        background: #e5d5d1;
    }
`