import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8081/customer";
class CustomerService{
        async getAllCustomers(){
            return  await axios.get(CUSTOMER_API_BASE_URL);
        }
        async deleteCustomer(customerId){
            return await axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId)

        }
        async getCustomerById(customerId){
            return await axios.get(CUSTOMER_API_BASE_URL + '/' +customerId);
          }
        async createCustomer(customer){
            return await axios.post(CUSTOMER_API_BASE_URL,customer);
          }
        async updateCustomer(customer,customerId){
            return await axios.put(CUSTOMER_API_BASE_URL + '/update/' + customerId,customer);
          }
        async getCustomerByFirstName(firstName){
            return await axios.get(CUSTOMER_API_BASE_URL + '/name/' +firstName);
          }
    
}
export default new CustomerService();