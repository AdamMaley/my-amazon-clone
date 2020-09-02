import React from 'react'
import { useStateValue } from "../StateProvider/StateProvider";
import "../Checkout/Checkout.css";

// components import

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";


function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img 
                className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="" 
            />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>
                        You have no items in your basket. Click "Add to basket" to add an item to your cart.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout;
