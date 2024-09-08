import styles from './Header.module.css'
import logo from '../assets/images/portalrj-logo.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        // Calcula a nova opacidade baseado na posição do scroll
        const newOpacity = Math.max(0.9, 1 - window.scrollY / 300);
        setOpacity(newOpacity);
      };
   
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Remove o event listener no componente desmontar
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className={styles.header} onScroll={handleScroll} style={ {opacity } }>
            <div><Link><img src={logo} alt="" srcset="" /></Link></div>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Sobre nós</Link></li>
                <li><Link>Produtos</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Saiba mais</Link></li>
                <button>Faça seu orçamento</button>
            </ul>
        </header>
    )
}