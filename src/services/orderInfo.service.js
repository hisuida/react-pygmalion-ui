import http from "../http-common";

class OrderInfoDataService {
  findById(id) {
    return http.get(`/order/${id}`);
  }
}

export default new OrderInfoDataService();
