import React from "react";
import ColoredTab from "../Components/ColoredTab";
import CreditCardForm from "../Components/CreditCardForm";
import CreditCardIcon from '@mui/icons-material/CreditCard';

function PaymentBilling() {
  return (
    <div className="PaymentBilling">
        
            <ColoredTab/>
            <div className="row">
                <CreditCardIcon className="col-lg"/>
                <p>Credit Card</p>
                <CreditCardForm/>
            </div>
    </div>
  );
}

export default PaymentBilling;