import Cards from "@/app/componentes/Cards";
import styles from "./secao_experiencia.module.css";

export default function secao_experiencia(props) {
  return (
    <section
      className={
        props.estaEscuro ? styles.secao_modo_escuro : styles.secao_modo_claro
      }
    >
      <div className={styles.container_texto}>
        <h2>Experiências De Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className={styles.container_cards}>
        <Cards
          estaEscuro={props.estaEscuro}
          data="JUNHO 2012 - 2016"
          titulo="Web Designer"
          empresa="Pied Piper StartUp."
          texto="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
        />
        <Cards
          estaEscuro={props.estaEscuro}
          data="AGOSTO 2016 - 2019"
          titulo="Product Designer"
          empresa="E Corp."
          texto="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
        />
        <Cards
          estaEscuro={props.estaEscuro}
          data="FEVEREIRO 2019 - 2021"
          titulo="Digital Consulting"
          empresa="Arasaka Inc."
          texto="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
        />
      </div>
    </section>
  );
}
