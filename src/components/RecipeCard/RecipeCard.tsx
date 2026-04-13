import { Button } from '../assets/button/Button'
import styles from './RecipeCard.module.css'
import type { Recipe } from '../../types/types'
import { Link } from 'react-router'

type Props = {
	cardInfo: Recipe
}

export const RecipeCard = ({cardInfo}: Props) => {
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
						<span>{cardInfo.cookingTime} Min</span> - <span>{cardInfo.servings} serves</span>
					</div>
					<Link to={`/recipes/${cardInfo.id}`}><Button name='view recipe'/></Link> 
				</div>
			</div>
		</div>
	)
}
