export interface AuthResponse {
  access_token: string;
  type: string;
}

export interface AuthResponseError {
  detail: string;
}
