import styles from './CoolingTipsNourishingCard.module.css'
import { Link } from 'react-router'
import { Button } from '../../assets/button/Button'
import type { CookingTipsDetail } from '../../../types/types'

type Props = {
	cardInfo: CookingTipsDetail
}

export const CoolingTipsNourishingCard = ({cardInfo}: Props) => {
	return (
		<div className={styles.card} style={{'backgroundImage': `url(${cardInfo.image})`}}>
			<div className={styles.info}>
				<h3 className={styles.title}>{cardInfo.title}</h3>
				<p className={styles.description}>
					{cardInfo.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{cardInfo.time} Min</span> - <span>{cardInfo.date}</span>
					</div>
					<Link to={`/cooking-tips/${cardInfo.id}`}><Button name='read more' color='light'/></Link> 
				</div>
			</div>
		</div>
	)
}
