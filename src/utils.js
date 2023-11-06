import axios from "axios";
import { API_BASE_URL } from "./constant.js";
import { key } from "../test/env.js";

/**
 * create a axios instance with http header "X-Auth-Token" setting to token
 * @param {string} token
 * @returns {import("axios").AxiosInstance}
 */
export const createRequestInstance = (token) => {
  const defaultConfig = {
    method: "get",
    baseURL: API_BASE_URL,
    responseType: "json",
    headers: { "X-Auth-Token": token },
  };

  return axios.create(defaultConfig);
};

/**
 * ignore properties of filters that are not availble
 * then create a url query string
 * // returns "?a=10"
 * @example getValidFilters({a: 10, b: 200}, ["a", "x"])
 * @param {object} filters
 * @param {Array<string>} availables
 * @returns {string}
 */
export const buildFilterQuery = (filters = {}, available = []) => {
  const s = new Set(available);
  const params = [];
  for (const [k, v] of Object.entries(filters)) {
    if (s.has(k)) {
      params.push([k, v]);
    }
  }

  return buildQuery(params);
};

/**
 * build a query string from an array of properties
 * @example
 * returns "?aa=100&&bb=200"
 * @example
 * returns ""
 * buildQuery([])
 * @param {Array<Array<string>>} params
 * @returns {string}
 */
export const buildQuery = (params = []) => {
  let query = params.length === 0 ? "" : "?";

  let isFirstParam = true;
  for (const param of params) {
    const [key, value] = param;
    if (isFirstParam) {
      query = `${query}${key}=${value}`;
      isFirstParam = false;
    } else {
      query = `${query}&&${key}=${value}`;
    }
  }

  return query;
};

/**
 * given an array, remove duplicate items
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
export const removeDuplicates = (array) => {
  const s = new Set(array);
  return Array.from(s);
};
