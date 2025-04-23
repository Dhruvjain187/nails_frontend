import styled from "styled-components";

export const ProductPageStyles = styled.div`
    /* display: flex; */
    padding: 0 15px;
    box-sizing: border-box;
    margin-bottom: 54px;
    /* max-width: 1754px; */
    
    & .padding-container{
        padding: 20px 15px;
        box-sizing: border-box;
        max-width: 1754px;
        display: flex;
        gap: 20px;
        /* flex-wrap: wrap; */
    }

    /* & span{
        width: 53%;
    } */

    & .slider-container{
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
    }

    & .sticky{
        position: sticky;
        top: 0;
    }
    
    & .slider-component{
        width: 43%;
        position: relative;
    }

    & .main-img{
        max-width: 100%;
        margin: 0 auto;
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


        @media(max-width:768px){
        margin-bottom: 30px;

        .padding-container{
            flex-wrap: wrap !important;
            padding: 0;
        }

        .slider-component{
            width: 100%;
        }
    }
`

export const ProductContent = styled.div`
    width: 57%;
    box-sizing: border-box;
    font-family: "Roboto";

    & .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        gap: 10px;

        h1{
            font-weight: 500;
            line-height: 35px;
            margin: 0;
            font-size: 24px;
            color: #2d2c2c;
        }

        a{
            height: 20px;
            width: 20px;
            border-radius: 50%;
            box-shadow: 0px 0px 5px 0px #b7b7b7;
            padding: 6px;
                

            i{
                line-height: 1;
                color: #eb4159;
            }
        }
    }

    & .availability{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15.5px;

        a{
            font-size: 14px;
            color: #2d2c2c;
            text-decoration: underline;
        }

        span{
            font-size: 14px;
            color: #2d2c2c;
        }
    }

    & .info-stock{
        padding-bottom: 10px;
        font-size: 1.6rem;
        font-weight: 400;
        color: #2d2c2c;
            

        strong{
            font-weight: 600;
            /* color: #2d2c2c; */
            margin-right: 5.5px;
        }

        div{
            display: inline-block;
        }
    }

    & .purchasing-power{
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.white};
        line-height: 1.42857143;

        .bg{
            padding: 12px 15px;
            margin-bottom: 10px;
            box-sizing: border-box;
            background: #666;
            display: inline-block;
            font-size: 16px;
            text-align: center;
        }

        /* .bg .exception::after{
            content: "";
            position: absolute;
            font-family: "affirm" !important;
            left: 0;
            bottom: 0;
            color: white;
        } */

        .exception{
            font-size: 1.136em;
            font-weight: normal;
        }

        a{
            color: ${({ theme }) => theme.colors.white};
        
            &:hover{
                color: ${({ theme }) => theme.colors.black};
            }
        }
    }

    & .store-pickup{
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        flex-wrap: wrap;

        .pickup{
            width: 148px;
            display: block;
        }

        a{
            text-decoration: none;
            border: 1px solid #eb4159;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            padding: 12px;
            box-sizing: border-box;

            &:hover{
                background: #f5f5f5;
                border-color: ${({ theme }) => theme.colors.brown};
            }

            &:focus{
                outline: #8e7069 dashed 1px !important;
                outline-offset: 2px !important;
            }
        }

        img{
            max-width: 100%;
            height: auto;
        }

        .fullfillment{
            font-size: 18px;
            font-weight: 700;
            color:${({ theme }) => theme.colors.black};
        }

        .msg{
            color:${({ theme }) => theme.colors.pinkish};
            font-size:12px;
            font-weight: 400;
        }
    }

    & .price-info{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        border-top: 1px solid #f6f2f1;
        align-items: center;
        padding: 15px 0;

        .info-price{
            display: flex;
            gap: 15px;
            align-items: center;
            vertical-align: top;

            &::before{
                content: "Price:";
                font-size: 16px;
                color: #2d2c2c;
            }

            span{
                font-weight: 600;
                font-size: 24px;
                line-height: 24px;
                color: #232323;
            }
        }

        .field{
            /* width: 100%; */
            display: flex;
            gap: 20px;
            align-items: center;
        
            .qty-container{
                display: flex;
                gap: 10px;
                align-items: center;
            }

            .qty{
                font-size: 18px;
                color: #2d2c2c;
                font-weight: 600;
            }

            .box{
                display: flex;
                gap: 5px;
                border: 1px solid #ccc;
                /* height: 40px; */
                box-sizing: border-box;
                align-items: center;

                span{
                    display: block;
                    height: 40px;
                    width: 30px;
                    text-align: center;
                    line-height: 40px;
                    font-size: 35px;
                    cursor: pointer;
                }

                .add{
                    font-size: 22px;
                }

                input{
                    border: none;
                    height: 40px;
                    width: 50px;
                    font-size: 16px;
                    background: ${({ theme }) => theme.colors.white};
                    padding: 10px 14px;
                    box-sizing: border-box;
                }
            }
        }
    }

    & .share-info{
        border-top: 1px solid #f6f2f1;
        padding: 15px 0;
        display: flex;
        align-items: center;

        .share{
            display: inline-block;
            color: #2d2c2c;
            font-size: 18px;
            line-height: 26px;
            margin-right: 15px;
        }

        img{
            max-width: 100%;
            height: auto;
        }

        a{
            height: 30px;
            width: 30px;
        }

        .margin{
            margin-right: 10px;
        }
    }

    & .more-info{
        overflow: hidden;

        .information:nth-child(2n){
            background-color: white;
            width: 100%;
            display: none !important;
            float: right;
            display: block;
            padding: 0;
            margin-top: 50px;
            margin-left: -100%;

            &:hover{
                border-top: none;
                background: white;
            }
        }

        & .information.visible{
            display: block !important;
            text-align: start;
            font-size: 16px;
            padding: 20px 0;
            color: #141516;

            p{
                margin: 0;
                margin-bottom: 15px;
                letter-spacing: 0.17px;
                line-height: 28px;
            }

            ul{
                padding: 0;
                margin: 0;
                list-style: none;
            }

            ul li,ol li{
                margin-bottom: 1rem;
                letter-spacing: 0.17px;
                line-height: 28px;    
            }

            ul li::before{
                content: '•';
                /* vertical-align: middle; */
                display: inline-block;
                font-size: 24px;
                padding-right: 10px;
            }

            table{
                th{
                    vertical-align: top;
                    font-weight: 600;
                    text-align: left;
                    border: none;
                    padding: 5.5px 33px 10px 0;
                }

                td{
                    vertical-align: top;
                    text-align: left;
                    border: none;
                    padding: 5.5px 33px 10px 0;    
                }
            }
        }

        .information{
            background: #f2edea;
            padding: 12px 6px;
            text-align: center;
            display: inline-block;
            width: 20%;
            float: left;
            box-sizing: border-box;
            color: #2d2c2c;

            &:hover{
                /* background: #eb4159; */
                background:${({ theme }) => theme.colors.white};
                border-top: 2px solid #eb4159;

                /* a{
                    color: ${({ theme }) => theme.colors.black} !important;
                } */
            }

            a{
                line-height: 24px;
                position: relative;
                display: block;
            }

        }

        .new-style{
                background:${({ theme }) => theme.colors.white};
                border-top: 2px solid #eb4159;
        }
    }

    @media(max-width: 1200px){        
    & .more-info{
        .information.visible:nth-child(2n){
            background-color: white;
            width: 100%;
            /* display: none !important; */
            float: none;
            display: block;
            padding: 0;
            margin: 0 !important;
            margin-top: 50px;

            &:hover{
                color: ${({ theme }) => theme.colors.black};
            }
        }


        .information{
            background: #f2edea;
            padding: 12px;
            text-align: start;
            margin-bottom: 10px;
            display: inline-block;
            width:100%;
            margin-bottom: 10px;
            float: none;
            box-sizing: border-box;
        }

        .information:hover{
            border-top: none;
            background: #eb4159;
            color: ${({ theme }) => theme.colors.white};

            a::after{
                border-top: 3px solid #fff;
                border-left: 3px solid #fff;
                border-bottom: none;
                border-right: none;
            }

            a{
                color: ${({ theme }) => theme.colors.white};    
            }
        }

        .new-style{
            background: #eb4159;
            color: ${({ theme }) => theme.colors.white};
            border-top: none;
        
            a::after{
                border-top: 3px solid #fff;
                border-left: 3px solid #fff;
                border-bottom: none;
                border-right: none;
            }
        }

        a{
            width: 100%;
        }

        a::after{
            content: "";
            position: absolute;
            height: 8px;
            width: 8px;
            border-bottom: 3px solid #000;
            border-right: 3px solid #000;
            right: 0;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            padding: 0;
            transition: transform .25s ease-out;
        }
    }
    }

    @media(max-width:768px){
        width: 100%;

        & .title{
            text-align: center;
                
        h1{
            text-align: left;
            font-size: 20px;
        }
    }
    }

    @media(max-width:639px){
            table{
             tr{
                display: block;
                padding: 0 0 5.5px;
             }
             
             th{
                padding: 0 !important;
                padding-right: 10px !important;
             }

             td{
                padding: 0 !important;
             }
            }
    }
`