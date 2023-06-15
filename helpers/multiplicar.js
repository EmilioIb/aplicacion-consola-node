const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    let salida = "",
      salidaConsola = "";
    let nombreArchivo = `tabla-${base}.txt`;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      salidaConsola += `${base} ${colors.green("x")} ${i} ${colors.green(
        "="
      )} ${base * i} \n`;
    }

    if (listar) {
      console.log(colors.green("========================="));
      console.log(colors.yellow("    Tabla del: "), colors.white(base));
      console.log(colors.green("========================="));
      console.log(salidaConsola);
    }

    fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
