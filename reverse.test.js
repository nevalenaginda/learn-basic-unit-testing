const funReverse = require("./reverse");
describe("reverse.js", () => {
  it("reverser function exist", () => {
    expect(funReverse("risano")).toBe("onasir");
  });
});
