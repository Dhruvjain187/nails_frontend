import styled from "styled-components";

export const BrandContainer = styled.div`
    margin-bottom: 30px;
    font-family: "Roboto";
    padding: 15px;

    & .brand{
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        overflow:auto;
    }


    & li{
        margin: 0 10px;


        & .icon-cont{
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 12px;
            border-radius: 50%;
            height: 138px;
            width: 138px;
            max-width: 170px;
            overflow: hidden;
            border: 2px solid #f5f5f5;
        }

        & .icon-cont:hover{
            border:${({ theme }) => `2px solid ${theme.colors.brown}`}
        }

        & .icon-cont:hover ~p{
            color:${({ theme }) => theme.colors.brown};
        }

        & img{
            height: auto;
            max-width: 100%;
        }

        & p{
            text-align: center;
            font-weight:400;
            font-size:14px;
            color:black;
        }
    }

        & .exception-li{
        /* margin-left: 0; */
    }

    @media(max-width:750px){
        &{
            padding:15px;
            background:#f9f9f9;
        }

        & .exception{
            padding:0;
        }

        & a{
            background:#f9f9f9;    
        }

        & .brand{
            overflow:none;
            flex-wrap:wrap;
            justify-content:center;
            align-items:center;
        }

        & li{
            margin:0;
            width:25%;
            padding:8px 3px;
            box-sizing:border-box;

            & .icon-cont{
                padding:0;
                height:65px;
                width: 65px;
                background:white;
            }
        }

        & li p{
            display:none;
        }        
    }
`