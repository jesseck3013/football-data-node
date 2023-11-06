export { leagues } from "./src/constant.js";
import {
  areas,
  areasById,
  competition,
  competitions,
  matches,
  matchesOfCompetition,
  matchesOfPerson,
  matchesOfTeam,
  person,
  scorersOfCompetition,
  standingsOfCompetition,
  team,
  teams,
  teamsOfCompetition,
} from "./src/rest.js";
import { createRequestInstance } from "./src/utils.js";

/** Client is the object for interacting with football-data.org's REST API */
export default class Client {
  #axios;
  /**
   * @param {string} token - api token of football-data.org
   */
  constructor(token) {
    this.#axios = createRequestInstance(token);
  }

  #sendReq(url) {
    return this.#axios.get(url);
  }

  /**
   * list all areas
   * @returns {import("axios").AxiosResponse}
   */
  areas() {
    return this.#sendReq(areas());
  }

  /**
   * given an areaId, return all child areas
   * @param {number} areaId
   * @returns {import("axios").AxiosResponse}
   */
  areasById(areaId) {
    return this.#sendReq(areasById(areaId));
  }

  /**
   * list all competitions
   * @param {{areas: string[]}} filters
   * @returns {import("axios").AxiosResponse}
   */
  competitions(filters = {}) {
    return this.#sendReq(competitions(filters));
  }

  /**
   * info of a specific competition by its id or code
   * @param {string | number} idOrCode
   * @param {{areas: string[]}} filters
   * @returns {import("axios").AxiosResponse}
   */
  competition(idOrCode = "PL", filters = {}) {
    return this.#sendReq(competition(idOrCode, filters));
  }

  /**
   * standings info of a specific competition
   * @param {number | string} idOrCode
   * @param {{season: number, matchday: number, date: string}} filters
   * @returns {import("axios").AxiosResponse}
   */
  standingsOfCompetition(idOrCode = "PL", filters = {}) {
    return this.#sendReq(standingsOfCompetition(idOrCode, filters));
  }

  /**
   * top scorer info of a specific competition
   * @param {number | string} idOrCode
   * @param {{season: number, matchday: number, date: string}} filters
   * @returns {import("axios").AxiosResponse}
   */
  scorersOfCompetition(idOrCode = "PL", filters = {}) {
    return this.#sendReq(scorersOfCompetition(idOrCode, filters));
  }

  /**
   * @param {number | string} idOrCode
   * @param {{season: number, matchday: number | string, status: string, dateFrom: string, dateTo: string, stage: string, group: string}} filters
   * @returns {import("axios").AxiosResponse}
   */
  matchesOfCompetition(idOrCode = "PL", filters = {}) {
    return this.#sendReq(matchesOfCompetition(idOrCode, filters));
  }

  /**
   * teams info of its competition
   * @param {number | string} idOrCode
   * @param {{season: number}} filters
   * @returns {import("axios").AxiosResponse}
   */
  teamsOfCompetition(idOrCode = "PL", filters = {}) {
    return this.#sendReq(teamsOfCompetition(idOrCode, filters));
  }

  /**
   * matches info
   * @param {number | string} id
   * @param {{ids: Array<number>, date: string, dateFrom: string, dateTo: string, status: string}} filters
   * @returns {import("axios").AxiosResponse}
   */
  matches(id = "", filters = { ids: [] }) {
    return this.#sendReq(matches(id, filters));
  }

  /**
   * list all teams
   * @returns {import("axios").AxiosResponse}
   */
  teams() {
    return this.#sendReq(teams());
  }

  /**
   * team info
   * @param {number} id
   * @param {{dateFrom: string, dateTo: string, season: number, status: string, venue: string, limit: number}} filters
   * @returns {import("axios").AxiosResponse}
   */
  team(id, filters = {}) {
    return this.#sendReq(team(id, filters));
  }

  /**
   * match as subresources of team
   * @param {number} id
   * @param {{dateFrom: string, dateTo: string, season: number, status: string, venue: string, limit: number}} filters
   * @returns {import("axios").AxiosResponse}
   */
  matchesOfTeam(id, filters = {}) {
    return this.#sendReq(matchesOfTeam(id, filters));
  }

  /**
   * person info
   * @param {number} id
   * @param {{lineup: string, e: string, dateFrom: string, dateTo: string, competition:Array<string>, limit: number, offset: number}} filters
   * @returns {import("axios").AxiosResponse}
   */
  person(id, filter = {}) {
    return this.#sendReq(person(id, filter));
  }

  /**
   * matches as subresource of person
   * @param {number} id
   * @param {{lineup: string, e: string, dateFrom: string, dateTo: string, competition:Array<string>, limit: number, offset: number}} filters
   * @returns {import("axios").AxiosResponse}
   */
  matchesOfPerson(id, filter = {}) {
    return this.#sendReq(matchesOfPerson(id, filter));
  }
}
