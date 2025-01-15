import styles from "./topo.module.css"
import Image from "next/image";
import imgLogo from '../../../../public/logo.png';
import imgLua from '../../../../public/moon.png';
import imgSol from '../../../../public/sun.png';

export default function Topo(props){
    return(
        <div className={props.estaEscuro ? styles.topo_escuro : styles.topo_claro}>
            <Image className={styles.logo} src={imgLogo}/>
            <button onClick={props.click} className={props.estaEscuro ? styles.btn_escuro : styles.btn_claro}>
                <Image src={props.estaEscuro ? imgSol : imgLua}/>
            </button>
        </div>
    );
}