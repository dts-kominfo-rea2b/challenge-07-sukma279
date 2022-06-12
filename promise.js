const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const arrayIXX = await promiseTheaterIXX();
  const arrayVGC = await promiseTheaterVGC();

  const arrayTheater = [].concat(arrayIXX, arrayVGC);

  const count = arrayTheater.filter((item) => item.hasil === emosi).length;

  return count;
};

module.exports = {
  promiseOutput,
};
