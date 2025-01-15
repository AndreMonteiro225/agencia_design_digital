import styles from "./cards.module.css";

export default function Cards(props) {
  return (
    <div className={props.estaEscuro ? styles.modo_escuro : styles.modo_claro}>
      <div className={styles.container_card}>
        <p>{props.data}</p>
        <h4>{props.titulo}</h4>
        <p>{props.empresa}</p>
      </div>
        <p>{props.texto}</p>
    </div>
  );
}
