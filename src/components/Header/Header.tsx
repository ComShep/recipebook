import { NavLink } from 'react-router'
import styles from './Header.module.css'


export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src='/recipebook/header/Logo.svg' alt="logo" />
				<div>Cooks <br /> Delight</div>
			</div>
			<nav className={styles.menu}>
				<NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/">HOME</NavLink>
				<NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/recipes">RESIPES</NavLink>
				<NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/about">ABOUT US</NavLink>
			</nav>
			<div>
				Subscribe
			</div>
		</header>
	)
}
