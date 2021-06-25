import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const CheckoutForm = ({handlePay}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentErr, setPaymentErr] = useState(null)
 const [paymentSuccess, setPaymentSuccess] = useState(null)
 
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentErr(error.message);
        setPaymentSuccess(null)
      // console.log('[error]', error);
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentErr(null)
      handlePay(paymentMethod.id)
      // console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div className="row col-md-6 shadow rounded justify-content-center mt-5 ml-5 ">
      <form className="mt-3 p-3" onSubmit={handleSubmit}>
      <CardElement />
      <br />
      <br />
      <button  className="btn btn-primary" type="submit" disabled={!stripe}>
          Pay Now
        </button>
    </form>
    {
        paymentErr && <p style={{color:'red'}} >{paymentErr}</p>
      }
      {
        paymentSuccess && <p style={{color:'green'}} >Your Transaction Successful </p>
      }
    </div>
     
  );
};


export default CheckoutForm;