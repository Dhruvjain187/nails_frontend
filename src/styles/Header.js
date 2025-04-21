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

& .btn-invisible{
    display: none;
}

& .btn-visible{
    border: none;
    border-radius: 5px;
    height: 40px;
    background: ${({ theme }) => theme.colors.brown};
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    font-family: "Roboto";
    letter-spacing: 1.38px;
    box-sizing: border-box;

    &:hover{
        background: #e2e2e2;
    }
}

& span.number{
    font-weight: 500;
    font-size: 15px;
}

& .styled-icons{
    position: relative;
}

& .styled-icons .login-relative{
    display: block;
    position: absolute;
    right: 0;
    top: 48px;
    left: -140px;
    /* background: ${({ theme }) => theme.colors.white}; */
}

& .styled-icons .login-relative ul{
    padding: 0;
    margin: 0;
    margin-top: 4px;
    background: ${({ theme }) => theme.colors.white};
    position: relative;
    left: 5px;
    top: 10px;
    list-style: none;
    /* min-width: 175px; */
    z-index: 50;
    border: 1px solid #bbb;
    box-sizing: border-box;
    box-shadow: 0 3px 3px rgba(0,0,0,.15);
}

& .styled-icons .login-relative ul a{
    display: block;
    color: ${({ theme }) => theme.colors.darkblack};
    text-decoration: none;
    padding: 8px;
}

/* & .styled-icons .login-relative ul::before{
    display: block;
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    right: 10px;
    top: -12px;
    border: 6px solid;
    border-color: transparent transparent #fff;
    border-bottom-style:solid;
    z-index: 99;
}

& .styled-icons .login-relative ul::after{
    display: block;
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    right: 9px;
    top: -14px;
    border: 7px solid;
    border-color: transparent transparent #bbb;
    z-index: 98;
} */

& .fa-bag-shopping{
    position: relative;
    z-index: 40 !important;
}

& .display-none{
    display: none;
}

& .shopping-cart{
    position: absolute;
    text-align: center;
    padding: 25px 20px 0;
    top: -24px;
    right: -15px;
    width: 430px;
    box-shadow: 0 3px 3px rgba(0,0,0,.15);
    border-radius: 15px;
    border: 1px solid #ddd;
    z-index: 20;
    box-sizing: border-box;
    background-color: white;
    /* right: -30px; */

}

& .relative-title{
    position: relative;
}

& .align-angle{
    display: inline-block;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    line-height: 1.42857143;
    height: 100%;
    box-sizing: border-box;
}

& .cart-title .fa-angle-left{
    line-height: 1;
    font-size: 1.3em;
    /* position: absolute;
    left: 0; */
}

& .cart-title strong{
    color:${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: bolder;
}

& .cart-title .empty-cart{
    display: block;
    color:${({ theme }) => theme.colors.darkblack};
    font-size: 14px;
    font-weight: bolder;
    padding: 30px 0 20px;
    text-align: center;
}

& .items-wrapper{
    border: 1px solid #ccc;
    margin: 20px -20px;
    border-left: 0;
    border-right: 0;
    max-height: 190px;
    overflow-y: auto;
    padding: 15px;
}

& .wrapper-ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

& .product-item{
    border: 1px solid #ddd;
    margin-bottom: 20px !important;
    border-radius: 10px;
    padding: 15px;
}

& .wrapper-ul li:last-child{
    margin-bottom: 0px !important;
}

& .product-item-container{
    display: flex;
}

& .product-item-img{
    display: auto;
}

& .product-item-img img{
    width: 65px;
    height: auto;
}

& .product-item-details{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-left: 20px;
}

& .product-item-details strong{
    line-height: normal;
    height: auto;
    display: inline-block;
    width: 100%;
    letter-spacing: normal;
    text-align: start;
    margin:0 0 10px;
}

& .product-item-details strong a{
    font-size: 16px;
    color:${({ theme }) => theme.colors.darkblack};
    text-decoration: none;
    font-weight: 400;

    &:hover{
        color:${({ theme }) => theme.colors.brown}
    }
}

& .product-item-details .price-container{
    width: auto;
}

& .product-item-details .price{
    margin: 5px 0;
    white-space: nowrap;
    display: block;
    font-size: 16px;
    font-weight: 700;
    color:${({ theme }) => theme.colors.darkblack}
}

.qty-action{
    width: 72%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.qty{
    display: flex;
    align-items: center;
    /* padding: 0 9px; */
    gap: 5px;
}

.qty label{}

.qty input{
    outline: none;
    width: 60px;
    height: 32px;
    text-align: center;
    border: 1px solid #e5d5d1;

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
}

.qty input:focus{
    border-color: #da222b;
    box-shadow: 0 0 4px #e5d5d1;
}

//for removing butttons in input that increase or decrease value inside input 
/* input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */


.deleteandediticons div{
    /* text-decoration: none; */
    display: inline;
    color: ${({ theme }) => theme.colors.brown};
}

.edit{
    padding: 0 0 0 5px;
}

.delete{
    position: absolute;
    padding: 5px;
    top: -25px;
    background: ${({ theme }) => theme.colors.white};
}

.subtotal{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px;
}

.subtotal span{
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkblack};
}

.additional-info{
    display: flex;
    /* flex-wrap: wrap; */
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    column-gap: 10px;
}

.additional-info .info-span{
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.brown};
    padding: 10px 10px 10px 50px;
    margin-bottom: 10px;
    width: 50%;
    text-align: start;
    display: block;
    font-weight: 500;
    font-size: 1.2rem;
    position: relative;
}

.info-span.span-1::before{
    content: "";
    background-image: url("https://www.lanailsupplies.com/static/version1744184972/frontend/Cp/lanails/en_US/images/free-shipping.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35px;
    height: 35px;
    width: 35px;
    position: absolute;
    left: 10px ;
    top: 2px ;
}

.info-span.span-2::before{
    content: "";
    background-image: url("https://www.lanailsupplies.com/static/version1744184972/frontend/Cp/lanails/en_US/images/gift.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25px;
    height: 25px;
    width: 25px;
    position: absolute;
    left: 15px ;
    top: 6px ;
}

.additional-info .info-a{
    outline: none;
    text-decoration: none;
    border: none;
    display: block;
    width: 50%;
    height: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 44px;
    background: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    letter-spacing: 1.38px;
}

.additional-info.pd-15{
    padding-bottom: 15px;
}

& .store-circle{
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 50%;
    z-index: 40;
    height: 20px;
    width: 20px;
    top: 10px;
    right: -10px;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: 3px 0 0;
    min-width: 18px;
    background: ${({ theme }) => theme.colors.black};

    & span{
        width: 100%;
    }
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

@media(min-width:739px){
        & .styled-icons .login-relative ul{
            min-width: 175px;
        }

        & .styled-icons .login-relative ul::before{
        display: block;
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        right: 10px;
        top: -12px;
        border: 6px solid;
        border-color: transparent transparent #fff;
        border-bottom-style:solid;
        z-index: 99;
    }

    & .styled-icons .login-relative ul::after{
        display: block;
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        right: 9px;
        top: -14px;
        border: 7px solid;
        border-color: transparent transparent #bbb;
        z-index: 98;
    }
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

@media(max-width: 768px){
    & .styled-icons .login-relative{
        top: 100%;
    }

    & .styled-icons .login-relative ul{
        top: 0px;
        left: -2px;
    }
}

@media(max-width: 639px){
    & .shopping-cart{
        width: 340px;
    }

    & .product-item-details .price-container{
        text-align: start;
        width:100%;
    }

    .qty-action{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product-item-details strong a{
        font-size: 14px;
    }

    .qty input{
        box-sizing: border-box;
    }

    .qty{
        padding: 0 !important;
    }

    .additional-info{
        flex-wrap: wrap;
    }

    .additional-info .info-span{
        width: 100%;
    }

    .additional-info .info-a{
        width: 100%;
    }

    .additional-info .info-a:first-child{
        margin-bottom: 10px;
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