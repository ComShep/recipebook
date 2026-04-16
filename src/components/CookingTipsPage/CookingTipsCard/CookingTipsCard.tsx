import styles from './CookingTipsCard.module.css'
import { Link } from 'react-router'
import { Button } from '../../assets/button/Button'
import type { CookingTipsDetail, SubSectionType } from '../../../types/types'
import { useRecipeBookContext } from '../../../context/RecipeContext'

type Props = {
	cardInfo: CookingTipsDetail,
	subSection?: SubSectionType | null
}

export const CookingTipsCard = ({cardInfo, subSection}: Props) => {
	const {setSubSection} = useRecipeBookContext();

	const handleClick = () => {
		if (subSection) {
			setSubSection(subSection)
		}
	}	

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={cardInfo.image} alt="picture"/>
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{cardInfo.title}</h3>
				<p className={styles.description}>
					{cardInfo.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{cardInfo.time} Min</span> - <span>{cardInfo.date}</span>
					</div>
					<Link to={`/cooking-tips/${cardInfo.id}`} onClick={handleClick}><Button name='read more' /></Link> 
				</div>
			</div>
		</div>
	)
}
