import Link from "next/link";
import imgLogo from "../../../../public/logo.png";
import Image from "next/image";
import styles from "./rodape.module.css";
import imgFace from "../../../../public/facebook.png";
import imgTwitter from "../../../../public/twitter.png";
import imgLinkedin from "../../../../public/linkedin.png";
import imgDribble from "../../../../public/dribble.png";
import imgBehance from "../../../../public/behance.png";
import imgGoogle from "../../../../public/google.png";

export default function Rodape(props) {
  return (
    <div
      className={
        props.estaEscuro
          ? styles.container_rodape_escuro
          : styles.container_rodape_claro
      }
    >
      <Image src={imgLogo} />
      <div className={styles.container_texto}>
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online utilizando estratégias, ferramentas e tecnologias
          personalizadas.
        </p>
      </div>
      <nav className={styles.container_links}>
        <Link href="">
          <Image src={imgFace} />
        </Link>
        <Link href="">
          <Image src={imgTwitter} />
        </Link>
        <Link href="">
          <Image src={imgLinkedin} />
        </Link>
        <Link href="">
          <Image src={imgDribble} />
        </Link>
        <Link href="">
          <Image src={imgBehance} />
        </Link>
        <Link href="">
          <Image src={imgGoogle} />
        </Link>
      </nav>
      <div className={styles.copyright}>
        <p>Copyright 2024 <span>André Monteiro Rachel</span></p>
      </div>
    </div>
  );
}
