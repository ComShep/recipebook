import { NavLink } from 'react-router'
import { useState } from 'react'
import clsx from 'clsx'

import styles from './Header.module.css'

import { ColorButton } from '../assets//button/ColorButton'
import { IconBurger, IconClose, IconLogo } from '../assets/icons/Icons'


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
					<IconLogo/>
					<div>Cooks <br /> Delight</div>
				</div>
				<button className={styles.burger} onClick={() => setisMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <IconClose/> : <IconBurger/>}
				</button>
			</div>
			<div className={bottomContainer}>
				<nav className={styles.menu}>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/">HOME</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/recipes">RESIPES</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/about">ABOUT US</NavLink>
				</nav>
				<div>
					<ColorButton name='Add new recipe' bcgColor='color3' />
				</div>
			</div>
		</header>
	)
}
