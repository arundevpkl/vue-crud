import http from "../common/http";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

 
}

export default new UserDataService();
