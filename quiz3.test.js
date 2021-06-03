const { sequenceMember, sequenceSum } = require("./quiz3");

describe("sequenceMember", () => {
  it("sequenceMember true type of parameter", () => {
    expect(sequenceMember(5, 1, 1)).toBe(5);
    expect(sequenceMember(5, 1, 1)).not.toBeNull();
    expect(sequenceMember(5, 1, 1)).not.toBeUndefined();
    expect(sequenceMember(20, 1, 3)).toBe(58);
    expect(sequenceMember(20, 1, 3)).not.toBeNull();
    expect(sequenceMember(20, 1, 3)).not.toBeUndefined();
  });
  it("sequenceMember of missing parameter", () => {
    expect(sequenceMember()).toBe("Semua parameter harus diisi");
    expect(sequenceMember(1)).toBe("Semua parameter harus diisi");
    expect(sequenceMember(1, "2")).toBe("Semua parameter harus diisi");
    expect(sequenceMember(1, 2, null)).toBe("Semua parameter harus diisi");
  });
  it("sequenceMember of false type of parameter", () => {
    expect(sequenceMember(1, "2", "a")).toBe(
      "Semua parameter harus berupa angka"
    );
  });
});

describe("sequenceSum", () => {
  it("sequenceSum true type of parameter", () => {
    expect(sequenceSum(5, 1, 1)).toBe(15);
    expect(sequenceSum(5, 1, 1)).not.toBeNull();
    expect(sequenceSum(5, 1, 1)).not.toBeUndefined();
    expect(sequenceSum(100, 1, 3)).toBe(14950);
    expect(sequenceSum(100, 1, 3)).not.toBeNull();
    expect(sequenceSum(100, 1, 3)).not.toBeUndefined();
  });
  it("sequenceSum of missing parameter", () => {
    expect(sequenceSum()).toBe("Semua parameter harus diisi");
    expect(sequenceSum(1)).toBe("Semua parameter harus diisi");
    expect(sequenceSum(1, "2")).toBe("Semua parameter harus diisi");
    expect(sequenceSum(1, 2, null)).toBe("Semua parameter harus diisi");
  });
  it("sequenceSum of false type of parameter", () => {
    expect(sequenceSum(1, "2", "a")).toBe("Semua parameter harus berupa angka");
  });
});
