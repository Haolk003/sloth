import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../context/product-cart";
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false);
    const dispatch = useDispatch();
    const stripe = useStripe()
    const elements = useElements()
    const total=useSelector((state)=> state.cart.totalsPrice);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount:parseInt(total * 100),
                id
            })

            if(response.data.success) {
                console.log("Successful payment");
                dispatch(cartActions.CheckoutAccess());
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
                <div className="w-[500px] rounded-lg drop-shadow-lg  py-8 px-8 shadow-sm shadow-gray-600">
           
                <div className=" bg-white rounded-t-md  h-10 px-3 w-[100%] flex items-center justify-center">
                    <CardElement options={CARD_OPTIONS} className="w-full"/>
                </div>
            
            <button className="bg-blue-300 rounded-b-md w-[100%] h-10 text-white hover:bg-blue-700 duration-100 " >Pay</button>
            </div>
        </form>
        :
       <div>
           <h2 className="mt-[50px] font-semibold text-xl">You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div> 
        }
            
        </>
    )
}