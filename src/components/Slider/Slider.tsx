import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import styles from './Slider.module.css'

export const Slider = () => {
	return (
		<section className={styles.sliderSection}>
			<div className={styles.header}>
				<h2 className={styles.title}>favorite recipes</h2>
				<div className={styles.arrows}>
					<IconLeft/>
					<IconRight/>			
				</div>
			</div>
			<div className="slider">
				<RecipeCard/>
				<RecipeCard/>
				<IconLeftDisabled/>
<IconRightDisabled/>
			</div>
		</section>
	)
}
