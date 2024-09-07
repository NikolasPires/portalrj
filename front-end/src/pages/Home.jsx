import styles from './Home.module.css'

export default function Home() {
    return (
        <section className={styles.home}>
            <section className={styles.apresentacao}>
                <h1>A arte em concreto em um só Lugar</h1>
            </section>
            <section className={styles.quemsomos}>
                <h2>Um pouco sobre nós</h2>
            </section>
        </section>
    )
}