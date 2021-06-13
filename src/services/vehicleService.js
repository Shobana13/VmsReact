import axios from "axios";
const VEHICLE_API_BASE_URL = "http://localhost:8081/api/vehicle";

class VehicleService{
    async getAllVehicles(){
        return await axios.get(VEHICLE_API_BASE_URL)
    }
    async deleteVehicleById(vehicleId) {
        return await axios.delete(VEHICLE_API_BASE_URL + "/" + vehicleId);
      }
      async addVehicle(vehicle){
        return await axios.post(VEHICLE_API_BASE_URL,vehicle);
      }
      async viewVehicle(vehicleId){
        return await axios.get(VEHICLE_API_BASE_URL + "/" +vehicleId);
      }
      async update(vehicleId,vehicle){
        return await axios.put(VEHICLE_API_BASE_URL + "/update/" + vehicleId,vehicle);
      }
      async getVehicleByCategory(category){
        return await axios.get(VEHICLE_API_BASE_URL + "/category/" + category );
      }
}
export default new VehicleService()