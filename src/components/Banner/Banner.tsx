import { ColorButton } from "../assets//button/ColorButton"
import styles from './Banner.module.css'

export const Banner = () => {
	return (
		<section className={styles.bannerSection}>
			<div className={styles.bannerContent}>
				<h1 className={styles.title}>Unleash Culinary Excellence</h1>
				<p className={styles.text}>Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen</p>
				<ColorButton name="explore recipes" bcgColor="color2" />
			</div>

		</section>
	)
}
