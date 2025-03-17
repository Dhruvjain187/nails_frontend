import styled from "styled-components";

export const MainSlide = styled.div`
    display:block;
    overflow: hidden;

    & .img-con{
        img{
            max-width: 100%;
            height: auto;
        }
    }

    & .slick-prev{
        left: 15px;
        background: rgba(252,252,252,.7);
        color: black !important;
        z-index: 5;
        /* height: 50px;
        width: 50px; */
    }

        & .slick-next{
        right: 15px;
        background: rgba(252,252,252,.7);
        color: black ;
        z-index: 5;
        /* height: 50px;
        width: 50px; */
    }

    & .slick-prev:before,& .slick-next:before{
        color: black;
        /* font-size: 40px; */
    }
`
