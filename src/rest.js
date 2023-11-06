import { AREA, COMPETITION, MATCH } from "./constant.js";
import { buildFilterQuery, removeDuplicates } from "./utils.js";

/**
 * endpoint for listing all available area id
 * @returns {string}
 */
export const areas = () => {
  return AREA;
};

/**
 * given an id build the url of an area endpoint
 * @param {Number} areaId
 * @returns {string}
 */
export const areasById = (areaId) => {
  return `${AREA}/${areaId}`;
};

/**
 * list all competitions
 * @param {{areas: string[]}} filters
 * @returns {string}
 */
export const competitions = (filters = {}) => {
  const query = buildFilterQuery(filters, ["areas"]);
  return `${COMPETITION}${query}`;
};

/**
 * competition info by id or code
 * @param {string | number} idOrCode // example: for premier league, id is 2001, code is PL
 * @param {{areas: string[]}} filters
 * @returns {string}
 */
export const competition = (idOrCode = "PL", filters = {}) => {
  const query = buildFilterQuery(filters, ["areas"]);
  return `${COMPETITION}/${idOrCode}${query}`;
};

/**
 * standings
 * @param {number | string} idOrCode
 * @param {{season: number, matchday: number, date: string}} filters
 * @returns
 */
export const standingsOfCompetition = (idOrCode = "PL", filters = {}) => {
  const query = buildFilterQuery(filters, ["season", "matchday", "date"]);
  return `${COMPETITION}/${idOrCode}/standings${query}`;
};

/**
 * top scorers
 * @param {number | string} idOrCode
 * @param {{season: number, matchday: number}} filters
 */
export const scorersOfCompetition = (idOrCode = "PL", filters = {}) => {
  const query = buildFilterQuery(filters, ["season", "matchday"]);
  return `${COMPETITION}/${idOrCode}/scorers${query}`;
};

/**
 * @param {number | string} idOrCode
 * @param {{season: number, matchday: number | string, status: string, dateFrom: string, dateTo: string, stage: string, group: string}} filters
 * @returns
 */
export const matchesOfCompetition = (idOrCode = "PL", filters = {}) => {
  const query = buildFilterQuery(filters, [
    "season",
    "matchday",
    "status",
    "dateFrom",
    "dateTo",
    "stage",
    "group",
  ]);
  return `${COMPETITION}/${idOrCode}/matches${query}`;
};

/**
 * teams info of its competition
 * @param {number | string} idOrCode
 * @param {{season: number}} filters
 * @returns
 */
export const teamsOfCompetition = (idOrCode = "PL", filters = {}) => {
  const query = buildFilterQuery(filters, [
    "season",
  ]);
  return `${COMPETITION}/${idOrCode}/teams${query}`;
};

/**
 * @param {number | string} id
 * @param {{ids: Array<number>}} filters
 */
export const matches = (id = "", filters = { ids: [] }) => {
  if (id && !isNaN(+id)) {
    filters.ids = removeDuplicates([+id, ...filters.ids]);
  }

  const query = buildFilterQuery(filters, [
    "ids",
    "date",
    "dateFrom",
    "dateTo",
    "status",
  ]);
  return `${MATCH}${query}`;
};
