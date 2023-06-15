const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tablade multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Es el numero hasta donde se vera en la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    if (isNaN(argv.h)) {
      throw "El limite tiene que ser un numero";
    }
    if (typeof argv.l !== "boolean") {
      throw "El listado debe ser un booleano";
    }
    return true;
  }).argv;

module.exports = argv;
