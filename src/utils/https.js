import axios from "axios";

export const API_BASE_URL = "https://bnmindia-server.onrender.com/api/v1";

export const NGROK_URL = "";
export const NGROK_TOKEN = "";

export const API_HEADERS = {
  "Content-Type": "application/json",
  // "ngrok-skip-browser-warning": "69420",
};

// HTTP methods
export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
};

// Create an Axios instance for API requests
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true,
  timeout: 120000,
});

// HTTP status codes
export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

// HTTP error messages
export const HTTP_ERROR_MESSAGES = {
  [HTTP_STATUS_CODES.BAD_REQUEST]: "Bad request",
  [HTTP_STATUS_CODES.UNAUTHORIZED]: "Unauthorized",
  [HTTP_STATUS_CODES.NOT_FOUND]: "Not found",
  [HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR]: "Internal server error",
};

// API error messages
export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your internet connection.",
  SERVER_ERROR: "Server error. Please try again later.",
  NOT_FOUND: "The resource you requested was not found.",
  UNAUTHORIZED: "You are not authorized to access this resource.",
  BAD_REQUEST: "Bad request.",
  UNKNOWN_ERROR: "Unknown error.",
};
