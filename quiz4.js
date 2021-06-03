module.exports = {
  findShoes: (array) => {
    if (!Array.isArray(array)) {
      return "Parameter harus berupa array";
    } else {
      const cekArray = (itm) => {
        return typeof itm === "number";
      };
      const resultCekArray = array.every(cekArray);
      if (resultCekArray) {
        const sortedSize = array.sort();
        const pairsOfShoes = [];
        for (let i = 0; i < sortedSize.length; i++) {
          if (sortedSize[i] === sortedSize[i + 1]) {
            pairsOfShoes.push(sortedSize[i]);
            i++;
          }
        }
        return pairsOfShoes.length;
      } else {
        return "Semua elemen array harus berupa angka";
      }
    }
  },
};
