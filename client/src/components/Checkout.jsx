import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51HT3awLRpPHpN9zVZksDRZ16m6HANATIi914WwDG7xbmNKQGsMyXEBTuUxlNZlkZ3EYFsfu5t0NQDeNQYbukyICZ000lVzvD9Y"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
