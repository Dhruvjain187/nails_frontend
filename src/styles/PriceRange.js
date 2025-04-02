import styled from 'styled-components';

export const PriceRangeContainer = styled.li`
padding: 0 20px 0 20px !important;

& .price{
    text-align: center !important;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.42857143;
}

.slider-wrapper {
  padding: 15px 10px;
  margin-bottom: 5px;
}

/* Override rc-slider default styles */
.rc-slider-handle {
  width: 8px;
  height: 12px;
  margin-top: 8px;
  cursor: pointer;
  background-color:#8e7069 !important;
  border:none;
  opacity: 1;
  border-radius: unset;
}

.rc-slider-handle::before{
    position: absolute;
    bottom: calc(100% - 4px);
    left: calc(50% - 3px);
    display: block;
    content: "";
    height: 6px;
    width: 6px;
    background: inherit;
    transform: rotate(-135deg);
}

/* .rc-slider-handle:hover {
  border-color: #4a53d6;
} */

.rc-slider-handle:active {
  border-color: none;
  box-shadow: none;
  cursor: pointer;
}

.rc-slider-track {
  background-color: #5661f1;
  height: 4px;
}

.rc-slider-rail {
  background-color: #ddd;
  height: 4px;
}

`