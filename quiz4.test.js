const { findShoes } = require("./quiz4");

describe("quiz4", () => {
  it("findSHoes of true type of array elemen", () => {
    expect(findShoes([4, 4, 4, 1, 3, 5, 5, 4, 4])).toBe(3);
    expect(findShoes([4, 4, 4, 1, 3, 5, 5, 4, 4])).not.toBeNull();
    expect(findShoes([4, 4, 4, 1, 3, 5, 5, 4, 4])).not.toBeUndefined();
  });

  it("findSHoes of false type of array elemen", () => {
    expect(findShoes([4, 4, 4, 1, null, 5, 5, 4, 4])).toBe(
      "Semua elemen array harus berupa angka"
    );
    expect(findShoes([4, 4, 4, 1, "3", 5, 5, 4, 4])).toBe(
      "Semua elemen array harus berupa angka"
    );
    expect(findShoes([4, 4, 4, 1, "", 5, 5, 4, 4])).toBe(
      "Semua elemen array harus berupa angka"
    );
  });

  it("findSHoes of false type of parameter", () => {
    expect(findShoes()).toBe("Parameter harus berupa array");
    expect(findShoes('[4, 4, 4, 1, "3", 5, 5, 4, 4]')).toBe(
      "Parameter harus berupa array"
    );
  });
});
