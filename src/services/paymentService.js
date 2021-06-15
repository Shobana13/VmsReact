import axios from "axios";

const PAYMENT_API_BASE_URL = "http://localhost:8081/api/payment";

class PaymentService {
    async getAllPayments() {
        return await axios.get(PAYMENT_API_BASE_URL);
    }

    async addPayment(payment) {
        return await axios.post(PAYMENT_API_BASE_URL, payment);
    }
    async cancelPayment(paymentId) {
        return await axios.delete(PAYMENT_API_BASE_URL + '/' + paymentId);
    }

    async viewPayment(paymentId) {
        return await axios.get(PAYMENT_API_BASE_URL + "/" + paymentId);
    }

    async updatePaymentStatus(payment, paymentId) {
        return await axios.patch(PAYMENT_API_BASE_URL + "/" + paymentId, payment);
    }

}
export default new PaymentService()