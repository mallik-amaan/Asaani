import React, { useState } from "react";
import ColoredTab from "../Components/ColoredTab";
import CreditCardForm from "../Components/CreditCardForm";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from "../Components/Buttons";
import CreditCard from "../Components/PaymentCard";


function PaymentBilling() {
  return (
    <div className="PaymentBilling">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div style={{display:'flex', padding:'20px 0px 0px 10px'}}>
              <CreditCardIcon/>
              <h5 style={{paddingLeft:'10px'}}>Credit Card(s)</h5>
            </div>
            <div style={{paddingLeft:'25px'}}>
              <p style={{paddingTop:'5px'}}>Manage your credit cards and payment options</p>
            </div>
            <div style={{padding:'20px'}}>
              <CreditCardForm/>
            </div>
          </div>
          <div className="col-6" style={{padding:'20px'}}>
            <CreditCard paddingtopprop="20px" cardtype='visa'/>
            <CreditCard paddingtopprop="20px" cardtype='master'/>
            <CreditCard paddingtopprop="20px" cardtype='visa'/>
            <CreditCard paddingtopprop="20px" cardtype='paypal'/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PaymentBilling;