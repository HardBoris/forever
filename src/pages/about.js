import { Fragment } from "react";
import about from "@/styles/About.module.css";

export default function About() {
  return (
    <Fragment>
      <div className={about.principal}>
        <div className={about.seccion}></div>
        <div className={about.seccion}>
          <div className={about.perfil}>
            <div className={about.foto}>Imagen</div>
            <div className={about.nombre}>Nombre</div>
            <div className={about.tarjeta}>Datos</div>
          </div>
          <div className={about.perfil}>
            <div className={about.foto}>Imagen</div>
            <div className={about.nombre}>Nombre</div>
            <div className={about.tarjeta}>Datos</div>
          </div>
          <div className={about.perfil}>
            <div className={about.foto}>Imagen</div>
            <div className={about.nombre}>Nombre</div>
            <div className={about.tarjeta}>Datos</div>
          </div>
        </div>
        <div className={about.seccion}></div>
      </div>
    </Fragment>
  );
}
