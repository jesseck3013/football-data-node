import assert from "assert";
import { buildFilterQuery, buildQuery } from "../src/utils.js";

it("build url query", () => {
  const params = [
    ["aa", 100],
    ["bb", 200],
  ];

  assert.deepStrictEqual(buildQuery(params), "?aa=100&&bb=200");
  assert.deepStrictEqual(buildQuery([]), "");
});

it("build url query from user defined filters and available filters ", () => {
  const filter = {
    aa: 100,
    bb: 200,
  };
  const available1 = ["aa", "cc"];
  assert.deepStrictEqual(buildFilterQuery(filter, available1), "?aa=100");

  assert.deepStrictEqual(
    buildFilterQuery({}, available1),
    "",
  );

  const available2 = ["aa", "bb", "cc"];
  assert.deepStrictEqual(
    buildFilterQuery(filter, available2),
    "?aa=100&&bb=200",
  );

  const available3 = [];
  assert.deepStrictEqual(
    buildFilterQuery(filter, available3),
    "",
  );
});
