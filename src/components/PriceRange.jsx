import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PriceRangeContainer } from '../styles/PriceRange';
import { debounce } from '../Hooks/useDebounce';
import { useCallback, useMemo } from 'react';
// const min = 0;
// const max = 1200;

export default function PriceRange({ minPrice, maxPrice, setSelectedFilters, priceRange, updatePriceFilter }) {
    // const [range, setRange] = useState([min, max]);
    const min = minPrice
    const max = maxPrice
    const [range, setRange] = useState([minPrice, maxPrice])
    // console.log(range)

    const debouncedSetFilters = useMemo(
        () =>
            debounce((newRange) => {
                setSelectedFilters((prev) => {
                    const newData = {
                        ...prev,
                        minPrice: Number(newRange[0]),
                        maxPrice: Number(newRange[1]),
                    }

                    //apply query params before updating local state i.e minPrice and maxPrice
                    updatePriceFilter(newData)

                    return newData
                });
            }, 2500)

        ,
        [setSelectedFilters]
    );

    const handleChange = useCallback((newRange) => {
        const [left, right] = newRange;
        // console.log(newRange)
        if (left < right) {
            // Prevent crossing: set left to the previous right, or right to the previous left.
            setRange([left, right]); // or setRange([left,left]);
            debouncedSetFilters(newRange)

        }
    }, [debouncedSetFilters])

    return (
        <>
            <PriceRangeContainer>
                <div className="slider-wrapper">
                    <Slider
                        range
                        min={priceRange[0]}
                        max={priceRange[1]}
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