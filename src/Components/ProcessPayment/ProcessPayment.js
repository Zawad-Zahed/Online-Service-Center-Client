import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`STRIPE_SECRET_KEY`);
//pk_test_51IeBbNGbQQBCpzN9HZDQIp3TXozxqbgcTzyqRHsXuidNHi931wdzrPYLjSIWHQIi7PetEXYZYcExjPy2cXsxMN9e00fgpNngqH
const ProcessPayment = ({ handlePay }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handlePay={handlePay}></CheckoutForm>
    </Elements>
  );
};

export default ProcessPayment;
