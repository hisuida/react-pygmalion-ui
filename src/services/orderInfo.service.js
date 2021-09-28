import http from "../http-common";

class OrderInfoDataService {
  findById(id: any) {
    return http.get(`/orderInfo?id=${id}`);
  }
}

export default new OrderInfoDataService();
