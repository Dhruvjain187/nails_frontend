import styled from "styled-components";

export const CategoryBar = styled.div`
    width: 256px;
    position: sticky;
    margin-top: 30px;
    margin-bottom: 20px;
    height: 76vh;
    vertical-align: top;
    top: 0px;
    overflow: hidden;
    /* display: inline-block; */

    & .border{
        border: 1px solid #ccc;
        border-radius: 10px;
    }


    & .exception{
        padding: 15px;
        background: ${({ theme }) => theme.colors.brown};
        border-radius: 5px 5px 0 0;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 500;
        font-size: 16px;
    }

    & .title{
        display: flex;
        justify-content: space-between;
        align-self: center;
        padding: 10px 15px;
        color: ${({ theme }) => theme.colors.darkblack};
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px solid #e5d5d1;

        & .fa-sm{
            line-height: unset;
            color: ${({ theme }) => theme.colors.pinkish};;
        }
    }

    & .content{
        max-height: 140px;
        list-style: none;
        overflow-y: auto;
        padding: 0;

        & li{
            font-size: 14px;
            line-height: 33px;
            padding: 0 0 0 20px;
        }
    }

    & .content-none{
        display: none;
    }


    @media(max-width: 769px){
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        width: 100%;
        height: 100%;
        margin-top: 0;
        margin-bottom: 0;
        background: white;
        z-index: 199;

        /* &.block{
            display: block;
        } */
    }

`