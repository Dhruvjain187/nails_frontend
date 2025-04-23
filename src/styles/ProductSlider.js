import styled from "styled-components";


export const ProductSliderContainer = styled.div`
        overflow: hidden;
        padding: 0 15px !important;
        margin-bottom: 30px;
        font-family: "Roboto";

        & .slider-container{
            overflow: hidden;
        }
        
        &  div.slick-track{
           display: flex;
            width: 3000px;
        }

        & .slick-slide{
            /* box-sizing: border-box; */
           margin: 0 5px 0 0;
        }


        & li{
            padding: 10px;
            /* max-width: 100%; */
            box-sizing: border-box;
            /* min-width: 165px; */
        }

        & .list-cont{
            margin-bottom: 5px;
            font-weight: 400;
            height: 38px;
            font-size: 14px;
            color: #2d2c2c;
            text-align: inherit;
        }

        & .list-cont:hover{
            color: ${({ theme }) => theme.colors.brown};
        }

        & .list-img{
        margin-bottom: 10px;
        /* overflow: hidden; */

        & img{
            margin: 0 auto;
        }
    }

    & .list-img:hover{
        box-shadow: 0px 6px 4px #e1e1e1;
    }

    & .inner-pad{
        position: relative;
        padding: 10px;
        border: 1px solid #eaeaea;

        /* i{
            position: absolute;
            z-index: 2;
            color: ${({ theme }) => theme.colors.pinkish};    
            top: 25px;
            right: 25px;
        } */

            .abs-icon{
                position: absolute;
                z-index: 2;
                /* color: ${({ theme }) => theme.colors.pinkish};     */
                top: 10px;
                right: 10px;
                border-radius:50%;
                background:${({ theme }) => theme.colors.white} ;
                box-shadow: 0px 0px 5px 0px #b7b7b7;
                padding: 6px;

                i{
                    color: ${({ theme }) => theme.colors.pinkish};
                }
            }
    }

    & .inner-pad:hover{
          border: 1px solid #eb4159;
          overflow: hidden;
          
    }

    & .list-img:hover img{
        scale: 1.2;
        transition: 1s;
    }

    & li img{
        /* padding: 10px; */
        max-width: 100%;
        height: auto;
        /* aspect-ratio: auto 240/240; */
        /* object-fit: cover; */
    }

    & .add-info{
        justify-content: space-between;
        display: flex;
        align-items: center;
        gap: 10px;

        & .blacktxt{
            font-weight: 700;
            font-size: 14px;
            color:#333;
        }

        & .browntxt{
            color:  #d38174;
            font-weight: 400;
            font-size: 14px;
            text-decoration: line-through;
        }

        & button{
            color:  ${({ theme }) => theme.colors.white};
            font-weight: 700;
            font-size: 14px;
            height: 42px;
            display: block;
            border-radius: 5px;
            border: none;
            outline: none;
            padding:0 15px;
            font-weight: 500;
            background: ${({ theme }) => theme.colors.brown};
        }

        & button:hover{
            background: ${({ theme }) => theme.colors.pinkish};
        }

        & .eye-icon{
            align-self: stretch;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3px 9px;
            border-radius: 6px;
            border:  ${({ theme }) => `1px solid ${theme.colors.brown}`};
        
            i{
                color:${({ theme }) => theme.colors.brown};
            }
        }

        & .eye-icon:hover{
            border:  ${({ theme }) => `1px dotted ${theme.colors.pinkish}`};
        
            i{
                color:${({ theme }) => theme.colors.pinkish};
            }
        }
    }

    @media(max-width:868px){
        padding: 0px;
        

        & .add-info .eye-icon{
            display:none
        }
    }
`