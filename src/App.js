import "./App.css";
import GooglePayButton from "@google-pay/button-react";
import React from "react";



function App() {


  return (
    <div className="App">
      <h1>GPay</h1>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "ExampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "123456789",
            merchantName: "Example Merchant",
          },
          transactionInfo: {
            currencyCode: "INR",
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1",
            countryCode: "IN",

          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],

        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Success", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorization", paymentData);
          return{transactionState: "SUCCESS"}
        }}
        existingPaymentMethodRequired={false}
        buttonColor="black"
        buttonType="short"
      />
    </div>
  );
}

export default App;
