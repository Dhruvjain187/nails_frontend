import styled from "styled-components";

export const MainSlide = styled.div`
    display:block;
    overflow: hidden;
 
    & .icons{
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .img-con{
        img{
            max-width: 100%;
            height: auto;
        }
    }

    & .slick-prev{
        left: 15px;
        height: 46px;
        width: 46px;
        background: rgba(252,252,252,.7);
        color: black !important;
        z-index: 5;
        /* height: 46px;
        width: 46px; */
    }

        & .slick-next{
        right: 15px;
        height: 46px;
        width: 46px;
        background: rgba(252,252,252,.7);
        color: black ;
        z-index: 5;
        /* height: 46px;
        width: 46px; */
    }

    & .slick-prev:before,& .slick-next:before{
        color: black;
        display: none;
        /* font-size: 40px; */
    }


    ${({ theme }) => theme.size.md}{
        & .img-con{
            img{
                border-radius: 12px;
            }
        }        

        & .slick-slider{
            width: 100%;
        }

        & .slick-track{
            display: flex;            
        }

        & .slick-slide{
            padding: 0 5px 0 5px;
        }

        & .icons{
            display: none;
        }
    }
`
