import styled from "styled-components";

export const MainHeader = styled.div`
& label{
    display: none;
}

&  input[type="checkbox"]{
    display: none ;
}

& .close{
    display: none;
    width: 30%;
}

& div  .fa-solid:hover{
    color: ${(props) => props.theme.colors.pinkish} ;
 }


@media(max-width:1025px){
    /* & input[type="checkbox"]:checked + .header-2{
        display: block !important;
    } */

    & label{
        display: block;
    }

    #header-2{
        padding: 0;
    }

    & #menu:checked ~ #header-2{
        display: flex;
        flex-direction: row;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 11;
        box-shadow: none;
        /* height:100%; */
    }

    #header-2 nav{
        background-color: white;
        width: 70%;
        align-items: self-start;
        justify-content: start;
        overflow-y: scroll;

        .box{
            width: 100%;
            display: block;

            a{
                /* width: 100%;  */
                display: flex;
                justify-content: space-between;

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
    & #header-2 .box:hover .shop{
        display: none !important;
    }

    & #header-2 #shop:hover ~ul{
        display: block;
    } 

    
    
    & #header-2 ul{
        all: unset;
        display: none;
        position: none
    }

    & #header-2 .shop-a:hover .shop,& #header-2 .best:hover .best-shop,& #header-2 .collection:hover .collectionul{
        display: block !important;
    }

    & #header-2 .shop,& #header-2 .best-shop,& #header-2 .collectionul{
        position: none;
    }

    & #header-2 ul li{
        width: 100%;
        padding: 0px;
        display: block;
        background: none;
    }

    & #header-2 ul li div a{
        padding-left: 24px;
    }
}
`

export const Header1 = styled.div`
padding: 10px 15px;
display: flex;
justify-content: space-between;
align-items: center;
line-height: 1.5rem;


img{
height: 31.44px;
    aspect-ratio: auto 220 / 37
}


.menu{
    display: none;
}

& .input{
    width: 37%;
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

input[type="checkbox"]{
    display: none;
}


@media(max-width:970px){
    .menu{
       display: block;
    } 

    img{
        height: 33.94px;
    }
}

@media(max-width:800px){
 flex-wrap:wrap ;

 span{
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
    gap:0.5rem;

    .image{
        margin-right: auto;
    }

}

`



export const Header2 = styled.div`
padding: 0 15px 0;
box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
position: relative;


.box{
    /* position: relative; */
    display: flex;
}


.shop,.best-shop{
    margin: 0 auto;
    list-style: none;
    display: none;
    /* height: 60vh; */
    position: absolute;
    top: 43px;
    left: 0;
    right: 0;
    z-index: 10;
    background: ${(props) => props.theme.colors.white};
    /* overflow-y: scroll; */
    /* overflow: scroll; */

    & li{
        width: 20%;
        display: flex;
        padding: 20px;
        flex-direction: column;
    }

    & li div{
        padding-bottom: 20px;
    }
}

.collectionul{
    margin: 0 auto;
    list-style: none;
    display: none;
    /* height: 60vh; */
    position: absolute;
    top: 43px;
    margin: 0 auto;
    z-index: 10;
    background: ${(props) => props.theme.colors.white};
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

& nav{
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */

    & .box{
        box-sizing: content-box;
    }
}

    @media(max-width:1025px){
        /* &{
            display: none;
        
            nav{
                position: absolute;
                left: -100%;
                flex-direction: column;
            }
        } */

            &{
            display: none;
            position: absolute;
            left: -100%;
         
        
            nav{
                flex-direction: column;
            }
        }
    }
`


export const NavAnchor = styled.a`
        font-family: "Roboto";
        padding: 12px;
        font-size: clamp(0.5rem, 100vw, 0.81rem);
        cursor: pointer;
        display: block;

        &:hover{
        background:${(props) => props.colors || "white"};
   
    }
`


export const ListAnchor = styled.a`
display: block;
    color:${(props) => props.colors || "black"};
    padding:${(props) => props.padding || "0 0 5px"};
`