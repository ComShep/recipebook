import { Button } from "../assets/button/Button"
import { IconBreakfest, IconDessert, IconDinner, IconLunch, IconQuickBite } from "../assets/icons/Icons"
import { Tag } from "../assets/tag/Tag"
import styles from './Explore.module.css'

export const Explore = () => {
	return (
		<section className={styles.exploreSection}>
			<div className={styles.info}>
				<Tag title="explore"/>
				<h2 className={styles.title}>Our diverse Palette</h2>
				<p className={styles.text}>If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.</p>
				<Button name="see more"/>
			</div>
			<div className={styles.categories}>
				<IconBreakfest />
				<IconLunch />
				<IconDinner />
				<IconDessert />
				<IconQuickBite />
			</div>

		</section>
	)
}
