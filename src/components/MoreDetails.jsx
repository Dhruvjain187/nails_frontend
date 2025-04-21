import { useReducer } from "react"

const initialState = {
    detail1: true,
    detail2: false,
    detail3: false,
    detail4: false,
    detail5: false
}

function detailReducer(state, action) {
    switch (action.type) {
        case "Toggle_Subdetail":
            return {
                // ...state,
                detail1: false,
                detail2: false,
                detail3: false,
                detail4: false,
                detail5: false,
                [action.payload]: true
            };
        case "Close_All":
            return {
                detail1: true,
                detail2: false,
                detail3: false,
                detail4: false,
                detail5: false
            }
        default:
            return state;
    }
}


export default function MoreDetails() {
    const [detailState, localdispatch] = useReducer(detailReducer, initialState);


    return (
        <>
            <div className="more-info">
                {/* 1 */}
                <div
                    className={detailState.detail1 ? "information new-style" : "information"}
                    onClick={() => localdispatch({ type: "Close_All" })}>
                    <a>Details</a>
                </div>
                <div className={detailState.detail1 ? "information visible" : "information"}>
                    <p>
                        The Gel-Ohhh! Jelly Spa is the ultimate spa experience for a relaxing treatment that uses heat therapy to soother aching joints and muscles.
                    </p>
                    <ul>
                        <li>Fresh, hydrating, moisturizing vegan jelly spa pedicure will help you feel relaxed & moisturize your feet's skin.</li>
                        <li>Detox & remove unclog pores, impurities in order to nourish your skin.</li>
                        <li>Helps soften the callus & offers aromatherapy.</li>
                        <li>Helps soften the callus & offers aromatherapy.</li>
                        <li>Boost up your mood with this must-have pedicure item.</li>
                    </ul>
                </div>


                {/* 2 */}
                <div
                    className={detailState.detail2 ? "information new-style" : "information"}
                    onClick={() => localdispatch({ type: "Toggle_Subdetail", payload: "detail2" })}>
                    <a>More Information</a>
                </div>
                <div className={detailState.detail2 ? "information visible" : "information"}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Weight</th>
                                <td>0.240000</td>
                            </tr>
                            <tr>
                                <th>UPC</th>
                                <td>300100179546</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* 3 */}
                <div
                    className={detailState.detail3 ? "information new-style" : "information"}
                    onClick={() => localdispatch({ type: "Toggle_Subdetail", payload: "detail3" })}>
                    <a>Features</a>
                </div>
                <div className={detailState.detail3 ? "information visible" : "information"}>
                    <ul>
                        <li>A unique and fun spa pedicure experience for relaxation using heat therapy that soothe and relieve tired and sore feet.</li>
                        <li>An upgrade for regular foot soak to a satisfying Jelly Pedi!</li>
                        <li>Various aromatherapy scents catering different clients and moods.</li>
                        <li>FREE OF harmful chemicals or preservatives, and is fully biodegradable.</li>
                    </ul>
                </div>


                {/* 4 */}
                <div
                    className={detailState.detail4 ? "information new-style" : "information"}
                    onClick={() => localdispatch({ type: "Toggle_Subdetail", payload: "detail4" })}>
                    <a>How To Use</a>
                </div>
                <div className={detailState.detail4 ? "information visible" : "information"}>
                    <p>To use Avry Beauty Jelly Spa Bath, follow these steps:</p>
                    <ol type="1">
                        <li>Fill a foot spa or a bathtub with warm water.</li>
                        <li>Pour the desired amount of Jelly Spa powder into the water. The recommended amount is 1 oz for a foot spa and 2-3 oz for a bathtub.</li>
                        <li>Mix the powder with the water until the powder is fully dissolved.</li>
                        <li>Soak your feet or body in the Jelly Spa bath for 15-20 minutes.</li>
                        <li>After the soak, rinse your feet or body with warm water and dry with a towel.</li>
                    </ol>
                    <p>Note: Do not use the product if you have any open wounds or cuts on your feet or body. It is also recommended to use the product in a well-ventilated area and avoid inhaling the powder.</p>
                </div>

                {/* 5 */}
                <div
                    className={detailState.detail5 ? "information new-style" : "information"}
                    onClick={() => localdispatch({ type: "Toggle_Subdetail", payload: "detail5" })}>
                    <a>About The Brand</a>
                </div>
                <div className={detailState.detail5 ? "information visible" : "information"}>
                    <p>Everyday Spa Reimagined.
                        <br />
                        AvryBeauty brings you clean, unique,
                        <br />
                        and fun spa products to transform your everyday salon services.
                    </p>
                </div>
            </div>
        </>
    )
}