import styled from "styled-components"
export const MainFooter = styled.div`
    margin-top: auto;
    /* for auto top */
    
    background: ${(props) => props.theme.colors.beige};
    /* padding: 0 15px; */
    font-family: "Roboto";
    font-weight: 400;
    

    @media(max-width:780px){
        background: ${(props) => props.theme.colors.white};
    }
`

export const Footer1 = styled.div`
    display: flex;
    justify-content: space-between;
    gap:15px;
    padding-bottom: 10px;
    padding: 0 15px;
    border-bottom: 1px solid #000;

    /* .m-15{
        margin-bottom: 15px;
        display: block;
    } */

    & .logo{
        width: 25%;

        & img{
            max-width: 100%;
            height: auto;
        }

        span{
            font-size: 16px;
            color: ${(props) => props.theme.colors.darkblack};    
        }
        
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
            color: ${(props) => props.theme.colors.black};
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
            color: ${(props) => props.theme.colors.black};
            font-family: "Roboto";
            font-size: 15px;
            font-weight: 400;
        }

        a:hover{
            color: ${(props) => props.theme.colors.pinkish};
        }
    }

    .size-18{
            font-size: 18px;
            color: ${(props) => props.theme.colors.black};
            margin-bottom: 15px;
        }

    .col-flex{
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px 15px 0px 15px;
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
            flex-direction: column;
            padding: 0;
            border-bottom: none;

            & br{
                display: none;
            }

            .col-flex{
                border-bottom: 1px solid #b8c5cb;
            }

            .logo{
                width: 100%;
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

            input#inp-1:checked ~ .col-flex-1 ul{
                display: block;
            }

            input#inp-2:checked ~ .col-flex-2 ul{
                display: block;
            }

            input#inp-3:checked ~ .col-flex-3 ul{
                display: block;
            }

            input#inp-4:checked ~ .col-flex-4 ul{
                display: block;
            }
        }


`


export const Footer2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 15px 20px 15px;
    gap: 10px;

    small{
        text-align: center;
        font-size: 14px;
    }

    div{
        align-self: center;

        img{
            margin-right: 5px;
        }
    }
`