import { IconEssential, IconMeasuring, IconTools } from '../assets/icons/Icons'
import styles from './Welcome.module.css'

export const WelcomeCoockingTips = () => {
	return (
		<section className={styles.welcomeSection}>
			<div className={styles.intro}>
				<h1 className={styles.title}>Our Essential Cooking Tips</h1>
				<p className={styles.text}>Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
				</p>
			</div>
			<div className={styles.essentials}>
				<div className={styles.item}>
					<div className={styles.icon}><IconTools/></div>
					<div className={styles.itemInfo}>
						<h3 className={styles.itemTitle}>Quality Tools</h3>
						<p className={styles.itemText}>Invest in high-quality knives, cutting boards, and cookware.</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}><IconEssential/></div>
					<div className={styles.itemInfo}>
						<h3 className={styles.itemTitle}>Essential Utensils</h3>
						<p className={styles.itemText}>Have a variety of utensils, including spatulas, tongs, and ladles.</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}><IconMeasuring/></div>
					<div className={styles.itemInfo}>
						<h3 className={styles.itemTitle}>Measuring Accuracy</h3>
						<p className={styles.itemText}>Use measuring cups and spoons for precise ingredient quantities.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
