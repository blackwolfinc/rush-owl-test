import { useMutation, MutationFunction } from "@tanstack/react-query";
import http from "../../../utils/http";
import { API_ENDPOINTS } from "../../../utils/api-endpoint";

interface UserData {
  email: string;
  password: string;
}

interface ApiResponse {
  // Define the structure of your API response data here
  // It depends on your API response
}

type PostLoginUserFunction = MutationFunction<ApiResponse, UserData>;

const postLoginUser: PostLoginUserFunction = async (data) => {
  return await http.post(API_ENDPOINTS.LOGIN, data);
};


export {  postLoginUser };
