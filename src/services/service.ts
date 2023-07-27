import axios from "axios";
import { IProduct } from "../model";

class Service {
  static async getAll(url: string, limit: number = 0) {
    const response = await axios.get<IProduct[]>(`${url}?limit=${limit}`);
    return response.data;
  }

  static async setItem(url: string, item: object) {
    const response = await axios.post<IProduct>(url, item);
    return response.data;
  }
}

export default Service;
