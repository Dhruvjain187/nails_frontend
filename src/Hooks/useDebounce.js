// import { useEffect, useState } from "react"

// export const useDebounce = (value, delay = 500) => {
//     const [debounceValue, setDebounceValue] = useState(value)

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setDebounceValue(value);
//         }, delay);

//         return () => clearTimeout(timeout)
//     }, [value, delay])
// }

export function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}