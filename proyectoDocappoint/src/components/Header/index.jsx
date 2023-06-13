import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div>
<nav className={styles.container}>
 <li>Home</li>
 <li>Consulta Rapida</li>
 <li>Especialidades</li>
 <li>Registrarse</li>
 <li>Inicio Sesion</li>
</nav>

    </div>
  )
}

export default Header