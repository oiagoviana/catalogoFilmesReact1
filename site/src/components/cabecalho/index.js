import storage from 'local-storage'

import { useState, useRef, useEffect } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const [usuario, setUsuario] = useState('-');

    const navigate = useNavigate();
    

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/');
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome)
        }
    }, [])

    return (
        <header className='comp-cabecalho'>
            <div className='bem-vindo'>Seja bem-vindo, {usuario} !</div>
            <div>
                <div className='usuario'>
                    <span>{ usuario[0].toUpperCase() }</span>
                </div>
            </div>
        </header>
    )
} 