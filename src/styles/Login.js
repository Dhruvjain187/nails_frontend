import styled from "styled-components";

export const LoginMain = styled.main`
    padding: 0 15px 0 15px;
    font-family: "Roboto";

    & .pd{
        padding-bottom: 40px;
    }

    & .error{
        margin-top: 7px;
        color: #e02b27;
        font-size: 1.2rem;
    }

    & .login-container{
        color:${({ theme }) => theme.colors.darkblack};
        border: 1px solid #e5d5d1;
        display: flex;
        flex-wrap: wrap;
    }

    & .login{
        width: 40%;
        box-sizing: border-box;
        border-right: 1px solid #e5d5d1;
    }

    & .required-field{
        margin-top: 35px;
        display: block;
        font-size: 1.2rem;
        color: #e02b27;
        content: "* Required fields";
    }

    & .new-customer{
        width: 60%;
    }

    & .strong{
        background: #f2edea;
        color:${({ theme }) => theme.colors.darkblack};
        padding: 10px 25px;
        margin: 0 0 15px;
        font-size: 1.8rem;
        font-weight: 700;
    }

    & .block-content{
        padding: 10px 25px;
        margin-bottom: 20px;
    }

    & form{
        display: block;
    }

    & .btn{
        display: flex;
        align-items: center;
        max-width: 450px;
    }

    & .btn a{
        font-style: italic;
        display: inline-block;
        color: ${({ theme }) => theme.colors.brown};
        margin-left: auto;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    & .flex{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    & .field{
        font-size: 1.4rem;
        font-weight: 400;
        margin: 0 0 15px;

        & input.show , & label.show{
            width: unset;
            margin: 0;
            font-weight: 400;
            display: inline !important;
        }

        & label.show::after{
            display: none;
        }

        & input.show:focus{
            outline: none;
            box-shadow:none;
            border-color: none;    
        }

        label{
            display: inline-block;
            margin: 0 0 5px;
            font-weight: 700;
        
            &::after{
                content: "*";
                color: #e02b27;
                font-size: 1.2rem;
                margin: 0 0 0 5px;
            }
        }

        /* input{
            display: block;
            width: 100%;
            box-sizing: border-box;
            background: #fff;
            border: 1px solid #c2c2c2;
            border-radius: 1px;
            padding: 0 9px;
            height: 40px;
        }

        input:focus{
            outline: none;
            box-shadow: 0 0 4px #e5d5d1;
            border-color: #da222b;
        } */
    }

    & h2{
        font-family: "Poppins";
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.darkblack};
        font-weight: 400;
        margin: 0;
        margin-bottom: 2rem;
    }

    & p{
        margin: 0;
        margin-bottom: 1rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.darkblack};
    }

    & ul{
        display: flex;
        margin: 0;
        margin-bottom: 2.5rem;
        padding: 0;
        justify-content: center;
    }

    & ul li{
        list-style: none;
        padding:5px;
        width: 33.333%;
        margin-bottom: 1rem;
    }

    & ul li a{
        display: block;
        border: 1px solid #dcd8d7;
        padding: 10px;
        color: ${({ theme }) => theme.colors.brown};
        font-size: 13px;
        text-decoration: none;
        text-align: center;
        letter-spacing: 1.38px;
        font-weight: 500;
        box-sizing: border-box;
    }

    & ul li a img{
        height: auto;
        max-width: 100%;
        width: 100%;
    }

    ${({ theme }) => theme.size.md}{
        & .login{
            border-right: none;
            /* width: none; */
        }

        & .new-customer{
            /* width: none; */
        }
    }

    @media(max-width: 770px){
        & .login-container{
            border: none;
        }

        & .login{
            width: 100%;
            border-right: none;
        }

        & .new-customer{
           width: 100%;
        }

        & .strong{
            background: none;
            color:${({ theme }) => theme.colors.darkblack};
            padding: 0 0 12px 0;
            margin: 0 0 15px;
            font-size: 1.8rem;
            font-weight: 400;
            border-bottom: 1px solid #e8e8e8;
        }

        & .block-content{
            padding: 0px;
            margin-bottom: 20px;
        }

        & .pd{
           padding-bottom: 10px;
        }

        & .btn{
            text-align: center;
            gap: 20px;
            flex-direction: column;
        }

        & .btn a,& .btn button{
            width: 100%;
        }
    }

    @media(max-width: 639px){
        & ul li{
            width: 46%;
        }
    }
`


export const BrownButton = styled.button`
    font-size: 14px;
    outline: none;
    display: inline-block;
    border: none;
    border-radius: 5px;
    height: 40px;
    line-height: 20px;
    font-family: "Roboto";
    background: ${({ theme }) => theme.colors.brown};
    padding: 10px;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1.38px;
    
    & i{
        color: ${({ theme }) => theme.colors.white};
    }
    
    &:hover{
        background: ${({ theme }) => theme.colors.pinkish};    
    }
`