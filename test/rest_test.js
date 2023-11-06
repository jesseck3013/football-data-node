import assert from "assert";
import {
  areas,
  areasById,
  competition,
  competitions,
  matchesOfCompetition,
  scorersOfCompetition,
  standingsOfCompetition,
  teamsOfCompetition,
} from "../src/rest.js";
import { AREA, COMPETITION } from "../src/constant.js";

it("comfirm areas enpoint", () => {
  assert.deepStrictEqual(areas(), AREA);
});

it("area by id", () => {
  assert.deepStrictEqual(areasById(100), `${AREA}/100`);
});

it("list all competitions", () => {
  assert.deepStrictEqual(competitions(), COMPETITION);
});

it("competitions with areas filters", () => {
  const filter = {
    areas: [100, 2000],
  };
  assert.deepStrictEqual(competitions(filter), `${COMPETITION}?areas=100,2000`);
});

it("competition by code", () => {
  assert.deepStrictEqual(competition("PL"), `${COMPETITION}/PL`);
});

it("standings", () => {
  assert.deepStrictEqual(
    standingsOfCompetition("PL"),
    `${COMPETITION}/PL/standings`,
  );
});

it("top scorers", () => {
  assert.deepStrictEqual(
    scorersOfCompetition("PL"),
    `${COMPETITION}/PL/scorers`,
  );
});

it("matches", () => {
  assert.deepStrictEqual(
    matchesOfCompetition("PL"),
    `${COMPETITION}/PL/matches`,
  );
});

it("teams", () => {
  assert.deepStrictEqual(teamsOfCompetition("PL"), `${COMPETITION}/PL/teams`);
});
