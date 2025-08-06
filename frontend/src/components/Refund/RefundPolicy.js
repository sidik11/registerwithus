// RefundPolicy.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './RefundPolicy.css';

function RefundPolicy() {
  return (
    <section className="refund-policy text-white py-5">
      <div className="container">
        {/* <h2 className="text-center mb-4"><i className="fas fa-money-bill-wave me-2"></i>Refund Policy</h2> */}
        <div className="refund-box p-4 rounded">
          <p>We strive for complete customer satisfaction. If you are not satisfied, the following policy applies:</p>
          <ol className="mt-3">
            <li>Refunds are only applicable within 7 days of purchase.</li>
            <li>To request a refund, contact support with proof of purchase.</li>
            <li>Refunds will be processed back to the original payment method.</li>
            <li>Service-based products are non-refundable once delivered.</li>
          </ol>
          <p className="mt-4">Still need help? Reach out to our support team for clarification.</p>
        </div>
      </div>
    </section>
  );
}

export default RefundPolicy;