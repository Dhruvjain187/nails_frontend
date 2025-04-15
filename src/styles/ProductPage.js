import styled from "styled-components";

export const ProductPageStyles = styled.div`
    display: flex;
    padding: 0 15px;
    box-sizing: border-box;
    max-width: 1754px;
    

    & span{
        width: 53%;
    }

    & .slider-container{
        overflow: hidden;
        
        position: relative;
    }

    & .sticky{
        position: sticky;
        top: 0;
    }
    
    & .slider-component{
        width: 43%;
    }

    & .main-img{
        max-width: 100%;
        height: auto;
    }


    & .slick-slider{
        display: flex;
        flex-wrap: wrap;
    }

    & .slick-dots{
        /* position: relative; */
        position: static;
        display: flex !important;
        justify-content: center;

        li{
            display: block;
            height: unset;
            width: unset;
            box-sizing: border-box;
        }

        & a{
            width:80px;
            height: 80px;
            display: block;
        }
        
        & img{
            max-width: 100%;
            height: auto;
            mix-blend-mode: multiply;
            /* height: 80px;
            width: 80px; */
        }
    }

    & li.slick-active{
        background-image: linear-gradient(to bottom right,rgba(255,255,255,.25),rgba(64,64,64,.1));
        border: 1px solid #eb4159;
        transition: all 600ms linear;
    }
`