import axios from 'axios';

export class HttpService {
  static async doPost(
    url,
    headers,
    data,
    setResponsEntityErrorData,
  ) {
    return this.doRequest({
      url,
      method: 'POST',
      headers,
      data,
      setResponsEntityErrorData,
    });
  }

  static async doGet(
    url,
    headers,
    responseType,
    setResponsEntityErrorData,
  ) {
    return this.doRequest({
      url,
      method: 'GET',
      headers,
      setResponsEntityErrorData,
      responseType,
    });
  }

  static async doRequest({
    url,
    method,
    headers,
    data,
    setResponsEntityErrorData,
    responseType,
  }) {
    let response = {};
    await axios({
      method,
      url,
      headers,
      data,
      responseType: responseType || 'text',
    })
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        this.intercept(error, setResponsEntityErrorData);
      });

    return response;
  }

  static intercept(
    error,
    setResponsEntityErrorData
   ) {
    if (!error.response) {
      throw error;
    }

    if (setResponsEntityErrorData) {
      setResponsEntityErrorData(error.response.data);
    }

    throw error;
  }
}
