export const NUMBER_OF_COLORS_IN_PALETTE = 10;
export const THIRTY_SECONDS = 30000;
export const API_URL = "https://sound-analyzer-api.herokuapp.com";
export const APP_ID = "3006086256296516";

export const FirebaseLoginApiErrors = {
  "auth/invalid-email": "Email ou senha inválidos",
  "auth/wrong-password": "Email ou senha inválidos",
  "auth/user-not-found": "Email ou senha inválidos",
  "auth/email-already-in-use": "Esse email já está em uso",
};

export function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
