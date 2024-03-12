import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'

import React from 'react'

function Card({ id, capa, titulo}) {
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={iconeFavoritar} 
            alt='Favoritar Filme'
            className={styles.favoritar} />
    </div>
  )
}

export default Card