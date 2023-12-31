import assert, { match } from "assert";
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
} from "../src/rest.js";
import { AREA, COMPETITION, MATCH, PERSON, TEAM } from "../src/constant.js";

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

it("list all team", () => {
  assert.deepStrictEqual(teams(), `${TEAM}`);
});

it("team info", () => {
  assert.deepStrictEqual(team(11), `${TEAM}/11`);
});

it("match as subresources of team", () => {
  assert.deepStrictEqual(matchesOfTeam(11), `${TEAM}/11/matches`);
});

it("person", () => {
  assert.deepStrictEqual(person(16275), `${PERSON}/16275`);
});

it("match as subresoruces of person", () => {
  assert.deepStrictEqual(matchesOfPerson(16275), `${PERSON}/16275/matches`);
});
