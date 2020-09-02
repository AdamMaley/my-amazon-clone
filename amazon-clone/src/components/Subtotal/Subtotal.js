import React from 'react'
import "../Subtotal/Subtotal.css";
import { useStateValue } from "../StateProvider/StateProvider";

import CurrencyFormat from "react-currency-format";
import getBasketTotal from "../../reducers/reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat 
                renderText={(value) => (
                    <React.Fragment>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{``}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </React.Fragment>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}  
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
