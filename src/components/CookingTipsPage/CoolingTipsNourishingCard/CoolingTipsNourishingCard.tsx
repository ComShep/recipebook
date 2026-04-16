import styles from './CoolingTipsNourishingCard.module.css'
import { Link } from 'react-router'
import { Button } from '../../assets/button/Button'
import type { CookingTipsDetail, SubSectionType } from '../../../types/types'

type Props = {
	cardInfo: CookingTipsDetail,
	subSection?: SubSectionType | null
}

export const CoolingTipsNourishingCard = ({ cardInfo, subSection }: Props) => {
	// const { setSubSection } = useRecipeBookContext();

	// const handleClick = () => {
	// 	if (subSection) {
	// 		setSubSection(subSection)
	// 	}
	// }

	return (
		<div className={styles.card} style={{ 'backgroundImage': `url(${cardInfo.image})` }}>
			<div className={styles.info}>
				<h3 className={styles.title}>{cardInfo.title}</h3>
				<p className={styles.description}>
					{cardInfo.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{cardInfo.time} Min</span> - <span>{cardInfo.date}</span>
					</div>
					<Link to={`/cooking-tips/${subSection}/${cardInfo.id}`}><Button name='read more' color='light' /></Link>
				</div>
			</div>
		</div>
	)
}
