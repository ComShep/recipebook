
import { Button } from '../../assets/button/Button'
import { Tag } from '../../assets/tag/Tag'
import styles from './AboutUs.module.css'

export const AboutUs = () => {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.firstElement}>
				<div className={styles.info}>
					<Tag title="about us" />
					<h2 className={styles.title}>Our Culinary Chronicle</h2>
					<p className={styles.text}>Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.</p>
					<Button name='read more'/>
				</div>
				<img src="./images/about/1.png" alt="about" />
			</div>
			<div className={styles.secondElement}>
				<img src="./images/about/2.png" alt="about" />
			</div>
			<div className={styles.thirdElement}>
				<img src="./images/about/3.png" alt="about" />
			</div>
		</section>
	)
}
