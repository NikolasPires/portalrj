import styles from './Header.module.css'
import logo from '../assets/images/portalrj-logo.png'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className={styles.header}>
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