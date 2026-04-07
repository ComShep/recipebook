import { IconDarkFacebook, IconDarkInst, IconDarkYoutube } from '../../assets/icons/Icons'
import styles from './Author.module.css'

export const Author = () => {
	return (
		<section className={styles.authorSection}>
			<div className={styles.aboutAuthor}>
				<div className={styles.left}>
					<img src="./images/aboutPage/1.png" alt="author"/>
					<div className={styles.follow}>
						<p>Follow me</p>
						<div className={styles.social}>
							<a href='#'><IconDarkFacebook/></a>
							<a href='#'><IconDarkInst/></a>
							<a href='#'><IconDarkYoutube/></a>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<h2 className={styles.title}>From Italian Roots to Global Palates</h2>
					<p className={styles.text}>Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.</p>
					<p className={styles.text}>Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.</p>
					<p className={styles.text}>Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.</p>
				</div>
			</div>
			<div className={styles.grid}>
				<img src="./images/aboutPage/2.png" alt="author"/>
				<img src="./images/aboutPage/3.png" alt="author"/>
				<img src="./images/aboutPage/4.png" alt="author"/>
				<img src="./images/aboutPage/5.png" alt="author"/>
				<img src="./images/aboutPage/6.png" alt="author"/>
				<img src="./images/aboutPage/7.png" alt="author"/>
				<img src="./images/aboutPage/8.png" alt="author"/>
				<img src="./images/aboutPage/9.png" alt="author"/>
			</div>
		</section>
	)
}
