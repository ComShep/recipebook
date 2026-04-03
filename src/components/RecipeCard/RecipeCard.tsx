import { Button } from '../assets/button/Button'
import styles from './RecipeCard.module.css'

export const RecipeCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src="/recipebook/public/images/RecipeImage.png" alt="picture"/>
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>Savory Herb-Infused Chicken</h3>
				<p className={styles.description}>
					Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>40 Min</span> - <span>easy prep</span> - <span>3 serves</span>
					</div>
					<Button name='view recipe'/>
				</div>
			</div>
		</div>
	)
}
