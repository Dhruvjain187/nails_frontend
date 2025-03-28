import styled from "styled-components";

export const StickyHeader = styled.div`
    position: sticky;
    top: 0;
    /* bottom: 0; */
    z-index: 10;
`

export const MainHeader = styled.div`
font-family: "Roboto";
background-color: ${({ theme }) => theme.colors.white};
margin-bottom:10px;

/* & .styled-icons{
    display: flex;
    align-items: center;
}

& .menu{
    font-size: 28px;
    display: flex;
    align-items: center;
}

& span.icons{
    font-size: 30px !important;

    & svg{
        display: inline-block;
    }
}

& span.user{
    font-size: 26px !important;
} */

& div.close{
    display: none;
}

/* &  input[type="checkbox"]{
    display: none ;
} */



& .close{
    /* display: none; */
    width: 15%;
}

& div  .fa-bars:hover{
    color: ${({ theme }) => theme.colors.pinkish} ;
 }


${({ theme }) => theme.size.md_lg}{
    /* & input[type="checkbox"]:checked + .header-2{
        display: block !important;
    } */

    & div.close{
        display: block;
    }

    #header-2{
        padding: 0;
    }

    /* & #menu:checked ~ #header-2{
        display: flex;
        flex-direction: row;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 11;
        box-shadow: none;
    } */

        &  #header-2{
        display: flex;
        flex-direction: row;
        left: 0;
        opacity: 1;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 11;
        box-shadow: none;
            /* background: rgba(0,0,0,0.2); */
    }

    #header-2 nav{
        background-color: white;
        width: 85%;
        align-items: self-start;
        justify-content: start;
        overflow-y: auto;

        .box{
            width: 100%;
            display: block;

            a{
                /* width: 100%;  */
                display: flex;
                justify-content: space-between;
                align-items: center;

                i{
                align-self: center;
                }
            }
        }
    }

    & .close{
       display: flex;
       justify-content: center;
       align-items: center;
    background: rgba(0,0,0,0.2);
    /* position: sticky;
    height: 100vh; */
    }



    /* for removing hover effect */
    /* & #header-2 .box:hover .shop{
        display: none !important;
    }

    & #header-2 #shop:hover ~ul{
        display: block;
    }  */
/* till here */
    
    
    & #header-2 ul{
        all: unset;
        display: none;
        position: none;
    }

        & #header-2 ul.block{
        all: unset;
        display: block !important;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 100;
    }

    /* & #header-2 .shop-a:hover .shop,& #header-2 .best:hover .best-shop,& #header-2 .collection:hover .collectionul{
        display: block !important;
    }

    & #header-2 .shop,& #header-2 .best-shop,& #header-2 .collectionul{
        position: none;
    } */

    & #header-2 ul li{
        width: 100%;
        padding: 0px;
        display: block;
        background: none;
    }

    /* & #header-2 ul li div a{
        padding-left: 24px;
    } */
}
`

export const Header1 = styled.div`
/* padding: 12px 17px; */
padding: 10px 15px;

display: flex;
justify-content: space-around;
align-items: center;
line-height: 1.42857143;
font-weight: 1.4rem;
box-sizing: content-box;
gap:1rem;
margin-bottom: 7px;

& span.number{
    font-weight: 500;
    font-size: 15px;
}

img{
    height: 37.09px;
    aspect-ratio: auto 220 / 37;
    display: block;
}


.menu{
    display: none;
}

& .input{
    width: 100%;
    max-width: 55%;

    & input[type="text"]{
        padding: 0;
        padding-left:10px;
        height: 42px;
        border-radius: 100px;
    }
}

.image{
        line-height: 1 ;
    }

input[type="text"]{
    all: unset;
    width: 100%;
    background: #f3f5f7;
    padding:0.3rem 0 0.3rem 0;
    border-radius: 0.9rem;

    /* &:focus{
        border:0.1px solid lightblue
    } */
}

& .login-a{
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
}

@media(max-width:1115px){
    justify-content: space-between;

    & .input{
    width: 100%;
    max-width: 37%;
}

& span.number{
    font-weight: 400;
    font-size: 14px;
}
}

${({ theme }) => theme.size.md_lg}{
    .menu{
       display: block;
    } 

    img{
        height: 26.97px;
        /* height: 33.94px; */
    }
}

@media(max-width:800px){
 flex-wrap:wrap ;

 span.number{
    display:none
 }

 & .input{
    order: 6;
    flex-grow: 1;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
 }

}


@media(max-width:625px){

    .image{
        margin-right: auto;
        /* line-height: 1 ; */
    }

}

`



export const Header2 = styled.div`
padding: 0 15px 0;
box-shadow:0 4px 12px 0 rgba(0,0,0,.1);
/* position: relative; */


.box{
    /* position: relative; */
    display: flex;
}

.best{
    position: relative
}




.shop,.best-shop{
    margin: 0 auto;
    list-style: none;
    display: none;
    max-height: 60vh;
    position: absolute;
    top: 41px;
    left: 0;
    right: 0;
    padding: 0;
    z-index: 10;
    background: ${({ theme }) => theme.colors.white};
    /* overflow-y: scroll; */
    overflow: auto;

    & li{
        box-sizing: border-box;
        width: 20%;
        height: 100%;
        display: flex;
        padding: 20px;
        flex-direction: column;
    }

    & li div{
        padding-bottom: 20px;
    }
}

& .shop li{
    display: flex !important;
}

& .exception-back-div{
    display: none !important;
    padding-bottom: 0 !important;
}

& .best-shop{
    width: 250px;

}



.collectionul{
    margin: 0 auto;
    width: 80%;
    list-style: none;
    display: none;
    /* height: 60vh; */
    position: absolute;
    top: 43px;
    margin: 0 auto;
    z-index: 10;
    background: ${({ theme }) => theme.colors.white};

    li{
        width: 25%;
    }
}

.best-shop{
    li{
        width: 100%;
    }
}

.shop li:nth-child(odd){
    background:rgba(245, 245, 246, .5);

        /* & div{
        background: rgba(245, 245, 246, .5);
    } */
}

.shop li:nth-child(even){
    background:white;

    /* & div{
        background: white;
    } */
}

.best li:nth-child(odd){
    background:white;
}

.shop-a:hover .shop,.best:hover .shop,.collection:hover .collectionul{
    display: flex;
    flex-direction: row;
}

.new-cont{
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */

    & .box{
        box-sizing: content-box;
    }
}

& nav{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & .box{
        box-sizing: content-box;
    }
}

& .mobile{
    display: none;
}

    ${({ theme }) => theme.size.md_lg}{
        /* &{
            display: none;
        
            nav{
                position: absolute;
                left: -100%;
                flex-direction: column;
            }
        } */

            & .new-cont{
                    position: relative;
            }

            & .shop{
                & li div{
                   padding-bottom: 0px;
                }
            }

            .fa-xmark{
                color: ${({ theme }) => theme.colors.white} !important;
            }

            .fa-angle-right{
                margin-right: -10px !important;
            }

            .best{
               position: unset;
            }

            & .exception-back-div{
               display: block !important;    
            }

            & .mobile{
                display: block;
                background: ${({ theme }) => theme.colors.brown};
            
                & img{
                    height: auto;
                }

            }

            /* here */
            &{
            opacity: 0;
            /* top: 0; */
            /* display: none; */
            position: fixed;
            left: -100%;
            transition: all 0.2s ease-in;
         
        
            nav{
                flex-direction: column;
            }

            .new-cont{
                width: 100% ;
                flex-direction: column;
                position: relative;
            }
        }
    }

    ${({ theme }) => theme.size.md}{
        margin-bottom: 0;
    }
`


export const NavAnchor = styled.a`
        font-family: "Roboto";
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        display: block;
        text-decoration: none;
        color:${({ theme }) => theme.colors.black}; 

        &:hover{
        color:white;
        background:${(props) => props.colors || "white"}; 
    }

    &.exception-a{
        color: white;
    }


    &.exception-a:hover{
        background:none;
        color :white ;
    }

    & i{
        margin-left: 5px;
    }

    &.exception:hover{
        color:black;
    }

    @media(max-width:1328px){
        font-size: 12px;
        padding: 10px 20px;

        &.exception-a{
            padding: 10px;
        }  

        & i{
            display: inline-block;
            margin-left: 2px;
        }
    }

    ${({ theme }) => theme.size.md_lg}{
        &:hover{
            color:black;
            background:none; 
        }

        & span{
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.42857143;
            color:${({ theme }) => theme.colors.black};
        }
    }

`


export const ListAnchor = styled.a`
display: block;
font-size: 15px;
color:${(props) => props.colors || "black"};
padding:${(props) => props.padding || "0 0 5px"};
        font-weight: ${(props) => props.fontwt};

        &.Back{
        display: none !important;
        justify-content: space-between;
        color: #000;
        padding: 12px 15px;
        margin-bottom: 10px;
    }

        ${({ theme }) => theme.size.md_lg}{
            display: none !important;

            &.Back{
            display:flex !important;
            justify-content: space-between;
            padding: 12px 15px;
            background: #f1f1f1;

            & span{
                font-size: 16px;
                color: #333;
            }
        }

        &.visible-li{
            display: flex !important;
            padding: 12px 20px !important;
            font-size: 15px;
            box-sizing: border-box;
            cursor: pointer;
        }

        &.brown-hover:hover{
            color: ${({ theme }) => theme.colors.brown} !important;
            cursor: pointer;
        }
    }
`