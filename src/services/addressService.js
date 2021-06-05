import axios from 'axios';

const ADDRESS_API_BASE_URL = "http://localhost:8081/address";
class AddressService{
        async getAllAddress(){
            return  await axios.get(ADDRESS_API_BASE_URL);
        }
        async deleteAddress(addressId){
            return await axios.delete(ADDRESS_API_BASE_URL + '/' + addressId)

        }
        async getAddressById(addressId){
            return await axios.get(ADDRESS_API_BASE_URL + '/' +addressId);
          }
        async createAddress(address){
            return await axios.post(ADDRESS_API_BASE_URL,address);
          }
        async updateAddress(address,addressId){
            return await axios.put(ADDRESS_API_BASE_URL + '/update/' + addressId,address);
          }
    
}
export default new AddressService();