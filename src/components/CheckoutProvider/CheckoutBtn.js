import React, { useEffect, useRef } from 'react';

const CheckoutButton = ({ amount, onSuccessfulPayment }) => {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        onSuccessfulPayment(order);
      },
    }).render(paypalRef.current);
  }, [amount, onSuccessfulPayment]);

  return <div ref={paypalRef}></div>;
};

export default CheckoutButton;
