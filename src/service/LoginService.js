import { API_URL } from "../util/constants";
import { HttpService } from "./HttpService";

export class LoginService {
  logar(body) {
    const url = `${API_URL}/logar`;

    return HttpService.doPost(url, {}, body);
  }
}
