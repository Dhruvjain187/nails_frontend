import styled from "styled-components";

export const ProductsContainer = styled.div`
    font-family: "Roboto";
    margin-bottom: 30px;

    & .list{
        padding: 0 15px;
        overflow-x: auto;
    }

    & ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        padding: 10px;

        li{
            padding: 10px;
            min-width: 165px;
        }
    }

    & .list-cont{
        margin-bottom: 5px;
        font-weight: 400;
        color: #2d2c2c;
    }

    & .list-cont:hover{
        color: ${(props) => props.theme.colors.brown};
    }

    & .list-img{
        margin-bottom: 10px;
        overflow: hidden;
    }

    & .list-img:hover{
        box-shadow: 0px 6px 4px #e1e1e1;
    }

    & .inner-pad{
        position: relative;
        padding: 10px;
        border: 1px solid #eaeaea;

        i{
            position: absolute;
            z-index: 2;
            color: ${(props) => props.theme.colors.pinkish};    
            top: 25px;
            right: 25px;
        }
    }

    & .inner-pad:hover{
          border: 1px solid #eb4159;
          
    }

    & .list-img:hover img{
        scale: 1.05;
        transition: 1s;
    }

    & li img{
        /* padding: 10px; */
        max-width: 100%;
        height: auto;
        aspect-ratio: auto 240/240;
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
            color: black;
        }

        & .browntxt{
            color:  ${(props) => props.theme.colors.brown};
            font-weight: 400;
            font-size: 14px;
            text-decoration: line-through;
        }

        & button{
            color:  ${(props) => props.theme.colors.white};
            font-weight: 700;
            border-radius: 5px;
            border: none;
            outline: none;
            padding: 10px;
            background: ${(props) => props.theme.colors.brown};
        }

        & button:hover{
            background: ${(props) => props.theme.colors.pinkish};
        }

        & .eye-icon{
            align-self: stretch;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3px 9px;
            border:  ${(props) => `1px solid ${props.theme.colors.brown}`};
        
            i{
                color:${(props) => props.theme.colors.brown};
            }
        }

        & .eye-icon:hover{
            border:  ${(props) => `1px dotted ${props.theme.colors.pinkish}`};
        
            i{
                color:${(props) => props.theme.colors.pinkish};
            }
        }
    }

    @media(max-width: 800px){}

    @media(min-width:986px){
        & li img{
            max-height: 180px;
        }
    }
`