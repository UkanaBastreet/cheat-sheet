import axios from "axios";

export default class SheetsApi {
  static url: string = "https://64138bbfc469cff60d659699.mockapi.io/sheets/";
  static async getSheets() {
    const data = await axios.get(this.url).then((res) => res.data);
    return data;
  }
  static async getOneSheet(id: number) {
    const sheet = await axios.get(this.url + "/:" + id).then((res) => res.data);
    return sheet;
  }
  static async create(data) {
    await axios.post(this.url, JSON.stringify(data));
  }
  static async update(data, id) {
    await axios.put(this.url + "/:" + id, JSON.stringify(data));
  }
  static async delete(id) {
    await axios.delete(this.url + "/:" + id);
  }
}
