import styled from "styled-components";


export const SliderComponentStyle = styled.div`
    display:block;
    overflow: hidden;

    & .img-con{
        img{
            max-width: 100%;
            height: auto;
        }
    }



    ${({ theme }) => theme.size.md}{
        & .img-con{
            img{
                border-radius: 12px;
            }
        }        

        & .slick-slider{
            width: 100%;
        }

        & .slick-track{
            display: flex;            
        }

        & .slick-slide{
            padding: 0 5px 0 5px;
        }
}
`