import { ColorButton } from '../assets/button/ColorButton'
import styles from './Subscribe.module.css'

export const Subscribe = () => {
	return (
		<section className={styles.subscribeSection}>
			<p className={styles.text}>SUBSCRIBE</p>
			<h2 className={styles.title}>Join the fun <br />Subscribe now!</h2>
			<p className={styles.text}>Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.</p>
			<div className={styles.email}>
				<input type="text" placeholder='Email Address'/>
				<ColorButton name='subscribe' bcgColor='dark'/>
			</div>
		</section>
	)
}
