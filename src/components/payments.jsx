import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelPayment } from "../actions/payment_actions";


const Payments = () => {
    const payments = useSelector((state) => state.payments);
    const dispatch = useDispatch();

return (
    <div>
      <table className="table mt-3">
        <thead className="table-dark">
          <tr>
            <th>PaymentId</th>
            <th>PaymentMode</th>
            <th>PaymentDate</th>
            <th>PaymentStatus</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentMode}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.paymentStatus}</td>
              <td>
                <button className="btn btn-secondary mr-2">Update</button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(payment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;