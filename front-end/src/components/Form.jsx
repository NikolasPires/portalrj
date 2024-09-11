import styles from './Form.module.css'
import { HeaderContext } from '../context/HeaderContext';
import { useContext } from 'react';

import {toast} from 'sonner'

export default function Form() {
    const {display, setDisplay} = useContext(HeaderContext)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleClick = (e) => {
        //e.stopPropagation()
        setDisplay('none')
    }

   

    return (
        <form onSubmit={handleSubmit} style={{ display }}>
            <div className={styles.formSec}>
                <div className={styles.closeForm}><span onClick={handleClick}>&times;</span></div>
                <h2>Solicite seu orçamento</h2>
                <div className={styles.request}>
                
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" />
                
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name="telefone" id="telefone" />
                
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="peca">PRODUTO</label>
                    <input type="text" name="peca" id="peca" />
                    
                    <button type="submit" onClick={() => (
                        toast.success('Orçamento realizado com sucesso!', {
                        timeout: 1000,
                        className: 'myToast'
                        },
                        setDisplay('none')
                    ))}>Enviar</button>
                   
                </div>
            </div>
        </form>
    );
}
