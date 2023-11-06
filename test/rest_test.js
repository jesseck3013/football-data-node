import assert, { match } from "assert";
import {
  areas,
  areasById,
  competition,
  competitions,
  matches,
  matchesOfCompetition,
  scorersOfCompetition,
  standingsOfCompetition,
  teamsOfCompetition,
} from "../src/rest.js";
import { AREA, COMPETITION, MATCH } from "../src/constant.js";

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

it("standings of competitions", () => {
  assert.deepStrictEqual(
    standingsOfCompetition("PL"),
    `${COMPETITION}/PL/standings`,
  );
});

it("top scorers of competitions", () => {
  assert.deepStrictEqual(
    scorersOfCompetition("PL"),
    `${COMPETITION}/PL/scorers`,
  );
});

it("matches of competitions", () => {
  assert.deepStrictEqual(
    matchesOfCompetition("PL"),
    `${COMPETITION}/PL/matches`,
  );
});

it("teams of competitions", () => {
  assert.deepStrictEqual(teamsOfCompetition("PL"), `${COMPETITION}/PL/teams`);
});

it("matches", () => {
  assert.deepStrictEqual(matches(10), `${MATCH}?ids=10`);
  assert.deepStrictEqual(matches(10, { ids: [10, 11] }), `${MATCH}?ids=10,11`);
});
