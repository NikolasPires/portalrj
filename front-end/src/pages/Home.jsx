import styles from './Home.module.css'
import elementoVazado from '../assets/images/portal-rj-elemento-amarelo.jpg'
import elementoMadeira from '../assets/images/portalrj-elementovazado-marrom.jpg'

import { GiBrickWall } from "react-icons/gi";


export default function Home() {
    return (
        <section className={styles.home}>
            <section className={styles.apresentacao}>
                <h1>A arte em concreto em um só Lugar</h1>
            </section>
            <section className={styles.quemsomos}>
                <div>
                    <h2>Um pouco sobre nós</h2>
                </div>
                <article>
                    <div className={styles.images}>
                        <img src={elementoVazado} alt="" />
                        <div className={styles.overlay}><img src={elementoMadeira} alt="" /></div>
                    </div>
                    <div className={styles.text}>
                        <h3>Somos a maior fabricante de decorativos em <span>concreto</span> do <span>Vale Paraíba</span> e região!</h3>
                        <p>Bem-vindo ao <span>PortalRJ</span>, onde a beleza e a inovação se encontram no mundo do concreto. Com um compromisso inabalável com a qualidade e um olhar atento às <span>tendências</span> contemporâneas, somos especialistas em <span>transformar</span> o concreto em verdadeiras obras de arte que elevam qualquer ambiente</p>
                        <div className={styles.slogan}>
                            <GiBrickWall className={styles.brick} size={140}/>
                            <p>Já são dezenas de municípios afetados pela simplicidade e autenticidade de nossos decorativos em concreto</p>
                        </div>
                    </div>
                </article>
            </section>
            <section className={styles.produtos}>

            </section>
        </section>
    )
}