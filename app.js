const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();
crearArchivo(argv.b, argv.h, argv.l)
  .then((nombreArchivo) => console.log(colors.yellow(nombreArchivo, "creado")))
  .catch((err) => console.log(colors.red(err)));
