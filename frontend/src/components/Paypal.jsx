import React from "react";
import ReactDOM from "react-dom"
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
import { PayPalButtons } from "@paypal/react-paypal-js";



export default function PaylPal() {

    const port = 5100
    const serverUrl = `http://localhost:${port}`

    // Sets up the transaction when a payment button is clicked
    async function createOrder() {
    return fetch(`${serverUrl}/api/orders`, {
        method: "post",
        // use the "body" param to optionally pass additional order information
        // like product skus and quantities
        body: JSON.stringify({
        product: 
            {
                description: "Unique FruityBox packaging",
                price: "10",
            },
        }),
    })
        .then((response) => response.json())
        .then((order) => order.id);
    }

    // Finalize the transaction after payer approval
    async function onApprove(data) {
    return fetch(`${serverUrl}/api/orders/${data.orderID}/capture`, {
        method: "post",
    })
        .then((response) => response.json())
        .then((orderData) => {
        // Successful capture! For dev/demo purposes:
        console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2),
        );
        const transaction = orderData.purchase_units[0].payments.captures[0];
        alert(`Transaction ${transaction.status}: ${transaction.id}

            See console for all available details
        `);
        // When ready to go live, remove the alert and show a success message within this page. For example:
        // var element = document.getElementById('paypal-button-container');
        // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        // Or go to another URL:  actions.redirect('thank_you.html');
        });
    }
  return (
    <PayPalButtons
      createOrder={(data) => createOrder(data, actions)}
      onApprove={(data) => onApprove(data, actions)}
    />
  );
}
