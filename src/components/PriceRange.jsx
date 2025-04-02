import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PriceRangeContainer } from '../styles/PriceRange';

const min = 0;
const max = 1200;

export default function PriceRange() {
    const [range, setRange] = useState([min, max]);

    const handleChange = (newRange) => {
        const [left, right] = newRange;
        if (left < right) {
            // Prevent crossing: set left to the previous right, or right to the previous left.
            setRange([left, right]); // or setRange([left,left]);
        }
    };


    return (
        <>
            <PriceRangeContainer>
                <div className="slider-wrapper">
                    <Slider
                        range
                        min={min}
                        max={max}
                        defaultValue={[min, max]}
                        value={range}
                        onChange={handleChange}
                        trackStyle={[{ backgroundColor: '#8e7069' }]}
                    // handleStyle={[
                    //     { borderColor: '#5661f1', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' },
                    //     { borderColor: '#5661f1', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }
                    // ]}
                    // railStyle={{ backgroundColor: '#ddd' }}
                    />
                </div>

                <div className="price">${range[0]}.00 - ${range[1]}.00</div>
            </PriceRangeContainer>
        </>
    )
}