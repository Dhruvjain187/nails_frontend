import styled from "styled-components";

export const Card = styled.li`
    padding: 10px;
    box-sizing : border-box;

    & .img-link{
        text-align: center;
        /* margin: 0 auto;         */
    }

    & a{
        display: inline-block;
        text-decoration: none;
        /* color: #2d2c2c; */
    }

    & .list-cont{
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 14px;
        color: #2d2c2c;
        text-align: inherit;

        a{
            height: 38px;
            color: #2d2c2c;
        }
    }

    & .list-cont a:hover{
        color: ${({ theme }) => theme.colors.brown};
    }

    & .list-img{
        margin-bottom: 10px;
        /* overflow: hidden; */

        & img{
            height: auto;
            max-width: 100%;
            /* margin: 0 auto; */
        }
    }

    & .list-img:hover{
        box-shadow: 0px 6px 4px #e1e1e1;
    }

    & .inner-pad{
        position: relative;
        padding: 10px;
        border: 1px solid #eaeaea;
        text-align: center;

        .abs-icon{
            position: absolute;
            z-index: 2;
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
        max-width: 100%;
        height: auto;
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

        /* & .browntxt{
            color:  #d38174;
            font-weight: 400;
            font-size: 14px;
            text-decoration: line-through;
        } */

        /* & button{
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
        } */

        /* & button:hover{
            background: ${({ theme }) => theme.colors.pinkish};
        } */

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

    @media(max-width:1025px){
        /* padding: 0px; */
        

        & .add-info .eye-icon{
            display:none
        }
    }
`