module.exports = {
  sequenceMember: (n, a, b) => {
    if (!n || !a || !b) {
      return "Semua parameter harus diisi";
    } else if (
      typeof n !== "number" ||
      typeof a !== "number" ||
      typeof a !== "number"
    ) {
      return "Semua parameter harus berupa angka";
    } else if (n <= 1) {
      return "Nilai n harus lebih besar dari satu";
    } else {
      let value = a;
      for (let i = 1; i <= n; i++) {
        value += b;
        if (i === n - 1) {
          return value;
        }
      }
    }
  },
  sequenceSum: (na, a, b) => {
    if (!na || !a || !b) {
      return "Semua parameter harus diisi";
    } else if (
      typeof na !== "number" ||
      typeof a !== "number" ||
      typeof a !== "number"
    ) {
      return "Semua parameter harus berupa angka";
    } else if (na <= 1) {
      return "Nilai n harus lebih besar dari 1";
    } else {
      let value = a;
      let sum = a;
      for (let i = 1; i <= na; i += 1) {
        value = value + b;
        sum = sum + value;
        if (i === na - 1) {
          return sum;
        }
      }
    }
  },
};
