import Personaje from "../Personaje/Personaje.js";
import HtmlComponent from "../../components/HtmlComponents/HtmlComponent.js";

class Asesor extends Personaje {
  asesorado;
  constructor(nombreAsesor, familiaAsesor, edadAsesor, personajeAsesorado) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Asesor;
