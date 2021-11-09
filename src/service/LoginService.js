import { HttpService } from "./HttpService";

export class LoginService {
  logar(body) {
    const url = "http://localhost:3001/login";

    return HttpService.doPost(url, {}, body);
  }
}
