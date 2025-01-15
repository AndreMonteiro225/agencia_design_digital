import imgBanner from "../../../../public/banner.jpg";
import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner(props) {
  return (
    <section className={styles.container_banner}>
      <div className={props.estaEscuro ? styles.banner_modo_escuro : styles.banner_modo_claro}>
        <Image src={imgBanner} />
      </div>
      <div className={styles.texto_banner}>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}
