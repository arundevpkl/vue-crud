import http from "../common/http";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/users", data);
  }
 
}

export default new UserDataService();
