
import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'

import React from 'react'
import CabecalhoLink from 'components/CabecalhoLink'

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to='./'>
            <img src={logo} alt="Logo do cinetag" />
        </Link>
        <nav>
            <CabecalhoLink url='./'>
                Home
            </CabecalhoLink>
            <CabecalhoLink url='./Favoritos'>
                Favorito
            </CabecalhoLink>
        </nav>
    </header>
  )
}

export default Cabecalho