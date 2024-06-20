import { apiClient } from "./clientApi";
export const executeBasicAutheinication = (token) => {
  return apiClient.get("/basicauth", {
    headers: {
      Authorization: token,
    },
  });
};
export const executeJwtBasicAutheinication = (username, password) => {
  return apiClient.post(`/authenticate`, { username, password });
};
