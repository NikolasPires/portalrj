import styles from './Header.module.css'
import logo from '../assets/images/portalrj-logo.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { HeaderContext } from '../context/HeaderContext';

export default function Header() {
    const {opacity, setOpacity, display, setDisplay} = useContext(HeaderContext)

    const handleScroll = () => {
        if(window.scrollY === 0) setOpacity(true)
        else setOpacity(false);

      };

    const handleClick = (e) => {
        //e.stopPropagation()
        setDisplay('flex')

    }
   
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // window.addEventListener('click', () => {
        //     setDisplay('none')
        // } )
        // Remove o event listener no componente desmontar
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className={`${opacity ? styles.opaco : styles.translucido} ${styles.header}`} onScroll={handleScroll}>
            <div><Link><img src={logo} alt="" srcset="" /></Link></div>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Sobre nós</Link></li>
                <li><Link>Produtos</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Saiba mais</Link></li>
                <button onClick={handleClick}>Faça seu orçamento</button>
            </ul>
        </header>
    )
}