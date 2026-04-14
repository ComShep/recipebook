import { NavLink } from 'react-router'
import { IconFacebook, IconInst, IconLogoFooter, IconTikTok, IconYoutube } from '../assets/icons/Icons';
import styles from './Footer.module.css'

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.top}>
				<NavLink to="/">
					<div className={styles.logo}>
						<IconLogoFooter />
						<div>Cooks <br /> Delight</div>
					</div>
				</NavLink>
				<nav className={styles.menu}>
					<NavLink to="/">HOME</NavLink>
					<NavLink to="/recipes">RESIPES</NavLink>
					<NavLink to="/cooking-tips">cooking tips</NavLink>
					<NavLink to="/about">ABOUT US</NavLink>
				</nav>
				<div className={styles.social}>
					<a href="#"><IconTikTok /></a>
					<a href="#"><IconFacebook /></a>
					<a href="#"><IconInst /></a>
					<a href="#"><IconYoutube /></a>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>Copyright: © {year} Cooks Delight.</p>
			</div>
		</footer>
	)
}
