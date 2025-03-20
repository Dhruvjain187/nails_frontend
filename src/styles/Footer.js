import styled from "styled-components"
export const MainFooter = styled.div`
    margin-top: auto;
    /* for auto top */
    
    background: ${({ theme }) => theme.colors.beige};
    /* padding: 0 15px; */
    font-family: "Roboto";
    font-weight: 400;
    

    @media(max-width:780px){
        background: ${({ theme }) => theme.colors.white};
    }
`

export const Footer1 = styled.div`
    margin-top: 30px;
    /* display: flex;
    justify-content: space-between;
    gap:15px; */
    padding-bottom: 10px;
    padding: 0 15px;
    /* border-bottom: 1px solid #000; */

    .border{
        display: flex;
        justify-content: space-between;
        gap:15px;
        border-bottom: 1px solid #000;
    }

    & span.exception{
            font-weight: 400;
            font-size: 16px !important;
        }

    & .exception-2{
        font-weight: 500;
    }

    & .logo {
        width: 25%;

        & img{
            max-width: 100%;
            height: auto;
        }

        span{
            font-size: 16px;
            color: ${({ theme }) => theme.colors.darkblack};    
        }
        
    }

    & span{
        font-weight: 500;
    }

    & .col-flex-1,& .col-flex-2,& .col-flex-3,& .col-flex-4{
        width: 18%;
    }

    & .cont-1{
        width: 18%;
    }

    ul.flex-i{
        padding: 0;
        display: flex;
        list-style: none;
        gap: 15px;

        li{
            display: block;
        }
    }

    .res-ul{
        padding: 0;
        list-style: none;

        li{
            color: ${({ theme }) => theme.colors.black};
            margin-bottom: 10px;
            font-size: 15px;
        }
    }

    .flex-para{
        display: flex;
        align-items:center;
        gap: 6px;

        a{
            text-decoration: none;
            color: ${({ theme }) => theme.colors.black};
            font-family: "Roboto";
            font-size: 15px;
            font-weight: 400;
        }

        a:hover{
            color: ${({ theme }) => theme.colors.pinkish};
        }
    }

    .size-18{
            font-size: 18px;
            color: ${({ theme }) => theme.colors.black};
            margin-bottom: 15px;
        }

    .col-flex{
            display: flex;
            flex-direction: column;
            gap: 15px;
            /* padding: 15px 15px 0px 15px; */
            /* border-bottom: 1px solid #b8c5cb; */

            .cont-1{
                width: 100%;
            }
        }

    input{
        display: none;
    }

    .row-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;

        i{
            display: none;
        }
    }

    @media(max-width:780px){
            /* flex-direction: column; */
            padding: 0;
            border-bottom: none;

            .border{
               flex-direction: column;
               border-bottom: none;
            }

            .flex-para{
                a{
                       font-size: 14px;
                }
            }

            .size-18{
                font-size: 16px;
                font-weight: 400;
            }

            & span.exception{
                font-weight: 400;
                font-size: 16px !important;
            }

            & .exception-2{
                font-weight: 500;
            }

            & br{
                display: none;
            }

            .col-flex{
               padding: 15px 15px 0px 15px;
             
                border-bottom: 1px solid #b8c5cb;
            }

            .logo{
                width: 100%;
            }

            & .col-flex-1,& .col-flex-2,& .col-flex-3,& .col-flex-4{
               width: 100%;
               box-sizing: border-box;
            }

            .cont-1{
                width: 100%;
            }

            .row-flex{    
                i{
                    display: block;
                }
            }       

            ul.res-ul{
                display: none;
            }

            input#inp-1:checked ~ .border .col-flex-1 ul{
                display: block;
            }

            input#inp-2:checked ~ .border .col-flex-2 ul{
                display: block;
            }

            input#inp-3:checked ~ .border .col-flex-3 ul{
                display: block;
            }

            input#inp-4:checked ~ .border .col-flex-4 ul{
                display: block;
            }
        }


`


export const Footer2 = styled.div`
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    /* padding: 20px 15px 20px 15px; */
    padding:15px 10px;
    /* gap: 10px; */
    gap: 30px;

    .small{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    small{
        text-align: center;
        font-size: 14px;
        line-height: 1.42857143;
        color: #232323;

        a{
            color: #232323;
        }
    }

    div.img{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2px;
        /* align-self: center; */

        img{
            margin-right: 5px;
        }
    }

    @media(max-width: 700px){
        flex-direction: column;
        gap: 10px;
    }
`