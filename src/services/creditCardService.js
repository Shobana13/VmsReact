import axios from "axios";

const CREDITCARD_API_BASE_URL = "http://localhost:8081/api/creditcard";

class CreditCardService {
    async getAllCreditCards() {
        return await axios.get(CREDITCARD_API_BASE_URL);
    }

    async addCreditCard(creditCard){
        return await axios.post(CREDITCARD_API_BASE_URL,creditCard);
      }
    
      
}
export default new CreditCardService()