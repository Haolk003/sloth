import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm';
const PUBLIC_KEY ='pk_test_51Lbd4wE2YSEf2RJ0rKOUch4FPiuMUCmE73M4wS0PsKZ9EsSYTd3SaIdBEZ0WNIJ47kKT7vzmY2dTOjJzLAc1DcVw00UhqGDi1w';
const stripeTestPromise=loadStripe(PUBLIC_KEY);
const StripeContainer = () => {
  return (
   <Elements stripe={stripeTestPromise}>
        <PaymentForm />
   </Elements>
  )
}

export default StripeContainer