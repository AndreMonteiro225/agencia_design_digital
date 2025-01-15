"use client";
import {useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Topo from "@/app/componentes/Topo";
import Banner from "@/app/componentes/Banner";
import Secao_experiencia from "@/app/componentes/Secao_experiencia";
import Rodape from "@/app/componentes/Rodape";

export default function Home() {

const [estaEscuro, setEstaEscuro] = useState(false);

function alterarTema() {
  setEstaEscuro(!estaEscuro)
}

  return (
    <div>
      <Topo click={alterarTema} estaEscuro={estaEscuro}/>
      <Banner estaEscuro={estaEscuro}/>
      <Secao_experiencia estaEscuro={estaEscuro}/>
      <Rodape estaEscuro={estaEscuro}/>
    </div>
  );
}
