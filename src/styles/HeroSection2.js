import styled from "styled-components"

export const HeroSection = styled.div`
    font-family: "Roboto";
    padding: 0 15px;
    margin-bottom: 30px;
    
    & article{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    & header{
        width: 80%;
    }

    & h2{
        line-height: 1.1;
        font-size: 25px;
        margin: 10px 0;
        font-weight: 700;
        color:${({ theme }) => theme.colors.darkblack};
    }

    & p{
        font-size: 16px;
        color:${({ theme }) => theme.colors.darkblack};
        font-weight: 400;
        margin: 0 0 1rem 0;
        margin: 10px 0;
    }

    & footer{
        width: 20%;
        text-align: right;
    }

    & .blog-posts{
        margin-top: 20px;
        display: flex;
    }

    & .posts{
        padding: 15px;

        header{
         text-align: start;
            width: 100%;
            line-height: normal;
            margin-bottom: 10px;
            font-size: 12px;
            color:${({ theme }) => theme.colors.white};
            font-weight: 400;
        }

        h2{
            text-align: start;
            height: 55px;
            font-weight: 500;
            margin-top: 0;
            font-size: 14px;
            line-height: 20px;
            color:${({ theme }) => theme.colors.white};
        }

        h2:hover{
            text-decoration: underline white;
        }

        footer{
            width: 100%;
            text-align: start;
        }
    }

    & .inner-post{
        z-index: 1;
        line-height: 0;
        overflow: hidden;
        position: relative;
        border-radius: 0 0 10px 10px;
    }

    & .post-info{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 15px;
        background: linear-gradient(90deg,rgba(0,0,0,.9360119) 0%,rgba(255,255,255,0) 74%);
    }

    /* & picture{
        display: block;
    } */

    & img{
        /* max-width: 100%;
        height: auto; */
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: center left;
        border-radius: 10px;
    }

    @media(max-width:750px){
        text-align: center;

        & article{
            flex-direction: column;
        }       

        & header,& footer{
            width: 100%;
        }

        & h2{
            font-size: 20px;
        }

        & footer{
            text-align: center;
        }

        & .posts{
            min-width: 250px;

            & h2{
                height: 45px;
            }
        }

        & .blog-posts{
            overflow: auto;
        }
    }
`