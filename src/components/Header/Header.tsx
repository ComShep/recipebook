import { NavLink } from 'react-router'
import styles from './Header.module.css'
import { Button } from '../elements/button/ColorButton'
import { useState } from 'react'
import clsx from 'clsx'


export const Header = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false);

	const bottomContainer = clsx({
		[styles.bottomContainer]: true,
		[styles.bottomContainerOpen]: isMenuOpen
	})

	const header = clsx({
		[styles.header]: true,
		[styles.headerOpen]: isMenuOpen
	})

	const handleClickClose = () => {
		setisMenuOpen(false)
	}

	return (
		<header className={header}>
			<div className={styles.topContainer}>
				<div className={styles.logo}>
					<img src='/recipebook/header/Logo.svg' alt="logo" />
					<div>Cooks <br /> Delight</div>
				</div>
				<button className={styles.burger} onClick={() => setisMenuOpen(!isMenuOpen)}>
					<img src={isMenuOpen ? '/recipebook/header/close.svg' : '/recipebook/header/burger.svg'} alt="burger" />
				</button>
			</div>
			<div className={bottomContainer}>
				<nav className={styles.menu}>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/">HOME</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/recipes">RESIPES</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/about">ABOUT US</NavLink>
				</nav>
				<div>
					<Button name='Add new recipe' bcgColor='orange' />
				</div>
			</div>
		</header>
	)
}
