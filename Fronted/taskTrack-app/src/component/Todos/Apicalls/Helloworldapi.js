import { apiClient } from "./clientApi";

export function retrieveHelloWorldBean() {
  // return axios.get("http://localhost:8088/helloworld/King");
  return apiClient("/helloworld/King");
}
// each time we are using base url so we make simple then

export const retrivelambda = () => {
  return apiClient.get("/helloworld");
};

export const retriveTodosByUsernameApi = (username) => {
  return apiClient.get(`/users/${username}/todos`);
};
export const DeleteTodoByidApi = (username, id) => {
  return apiClient.delete(`/users/${username}/todos/${id}`);
};
export const retriveTodoByidApi = (username, id) => {
  return apiClient.get(`/users/${username}/todos/${id}`);
};
//todo as part of request body
export const updateTodoByidApi = (username, id, todo) => {
  return apiClient.put(`/users/${username}/todos/${id}`, todo);
};
export const addTodoApi = (username, todo) => {
  return apiClient.post(`/users/${username}/todos`, todo);
};
