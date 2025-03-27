import styled from "styled-components";

export const SignUpMain = styled.main`
    padding: 0 15px 0 15px;
    font-family: "Roboto";
    box-sizing: border-box;
    line-height: 1.42857143;
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;

    & .error{
        margin-top: 7px;
        color: #e02b27;
        font-size: 1.2rem;
    }

    & form{
        display: block;
        padding-bottom: 10px;
    }

    & select{
        display: block;
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #c2c2c2;
        border-radius: 1px;
        padding: 0 9px;
        height: 40px;

        &:focus{
            outline: none;
            box-shadow: 0 0 4px #e5d5d1;
            border-color: #da222b;
        }        
    }

    & fieldset{
        display: block;
        border: 1px solid #e5d5d1;
        padding: 0;
        margin: 0;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    & .exception-field::after{
        content:"* Required Fields";
        color: #e02b27;
        font-size: 1.2rem;
        margin-left: 12px;
    }

    & fieldset h1{
        box-sizing: border-box;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.darkblack};
        font-weight: 700;
        background: #f2edea;
        border-bottom: 1px solid #f2edea;
        width: 100%;
        padding: 1% 2%;
        margin: 0;
        margin-bottom: 10px;
    }

    & .exception{
        vertical-align: top;

        & span{
            font-weight: 700;
            font-size: 1.4rem;
        }
    
        & input#remember{
            width: unset;
            display: inline !important;
        }
    }

    & .choice{
        margin: 5px 1.1% 10px; 

        & label{
            margin-bottom: 0 !important;
            font-size: 14px;
            font-weight: 400;

            &::after{
                display: none;
            }
        }
    }

    & .field{
        display: inline-block;
        width: 31%;
        margin: 5px 1.1% 10px;
        vertical-align: top;
    }

    & label{
        display: inline-block;
        margin: 0 0 5px;
        font-size: 14px;
        font-weight: 700;
        
        &::after{
            content: "*";
            color: #e02b27;
            font-size: 1.2rem;
            margin: 0 0 0 5px;
        }
    }

    @media(max-width: 1025px){
        & .choice{
            & label{
                font-size: 12px;
            }
        }
        
        & label{
            font-size: 12px;
        }

    }

    @media(max-width:769px){
        margin-left: unset;
        margin-right: unset;

        & .field{
            box-sizing: border-box;
            display: block;
            width: 96%;
            margin-left: 2%;
            margin-right: 2%;
            /* max-width: 100%; */

            & input{
                width: 100%;
                /* max-width: 100%; */
            }
        }

        & button{
            width: 100% !important;
        }
    }
`


export const Input = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #c2c2c2;
    border-radius: 1px;
    padding: 0 9px;
    height: 40px;

    &:focus{
        outline: none;
        box-shadow: 0 0 4px #e5d5d1;
        border-color: #da222b;
    }
`