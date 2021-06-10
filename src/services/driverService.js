import axios from "axios";
const DRIVER_API_BASE_URL = "http://localhost:8081/api/driver";

class DriverService{
    async getAllDrivers(){
        return await axios.get(DRIVER_API_BASE_URL)
    }
   async deleteDriverById(driverId) {
        return await axios.delete(DRIVER_API_BASE_URL + "/" + driverId);
      }
      async addDriver(driver){
        return await axios.post(DRIVER_API_BASE_URL,driver);
      }
      async viewDriver(driverId){
        return await axios.get(DRIVER_API_BASE_URL + "/" +driverId);
      }
      async updateDriver(driverId,driver){
        return await axios.put(DRIVER_API_BASE_URL + "/update/" + driverId,driver);
      }
      async getDriverByFirstName(firstName){
        return await axios.get(DRIVER_API_BASE_URL + "/firstname/" + firstName );
      }
}
export default new DriverService()