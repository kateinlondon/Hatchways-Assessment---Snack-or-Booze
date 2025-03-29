import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getSnackById(id) {
    const result = await axios.get(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }
}

export default SnackOrBoozeApi;
