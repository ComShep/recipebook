import { NavLink } from 'react-router'
import { useState } from 'react'
import clsx from 'clsx'

import styles from './Header.module.css'

import { ColorButton } from '../assets//button/ColorButton'
import { IconBurger, IconClose, IconLogo } from '../assets/icons/Icons'


export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const bottomContainer = clsx({
		[styles.bottomContainer]: true,
		[styles.bottomContainerOpen]: isMenuOpen
	})

	const header = clsx({
		[styles.header]: true,
		[styles.headerOpen]: isMenuOpen
	})

	const handleClickClose = () => {
		setIsMenuOpen(false)
	}

	return (
		<header className={header}>
			<div className={styles.topContainer}>
				<NavLink to="/">
					<div className={styles.logo}>
						<IconLogo />
						<div>Cooks <br /> Delight</div>
					</div>
				</NavLink>
				<button className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <IconClose /> : <IconBurger />}
				</button>
			</div>
			<div className={bottomContainer}>
				<nav className={styles.menu}>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/">HOME</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/recipes">RESIPES</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/coocking-tips">cooking tips</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.active : ''} onClick={handleClickClose} to="/about">ABOUT US</NavLink>
				</nav>
				<div>
					<ColorButton name='Subscribe' bcgColor='dark' />
				</div>
			</div>
		</header>
	)
}
