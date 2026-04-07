import { ColorButton } from '../../assets/button/ColorButton'
import styles from './Welcome.module.css'

export const Welcome = () => {
	return (
		<section className={styles.welcomeSection}>
			<h1 className={styles.title}>Welcome to my Culinary Haven!</h1>
			<div className={styles.description}>
				<p className={styles.text}>Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.</p>
				<ColorButton name='explore recipes' bcgColor='color2'/>
			</div>
		</section>
	)
}
