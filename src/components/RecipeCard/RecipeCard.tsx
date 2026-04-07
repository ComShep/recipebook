import { Button } from '../assets/button/Button'
import styles from './RecipeCard.module.css'
import type { Recipe } from '../../types/types'
import { Link } from 'react-router'

type Props = {
	recipe: Recipe
}

export const RecipeCard = ({recipe}: Props) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={recipe.image} alt="picture"/>
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{recipe.title}</h3>
				<p className={styles.description}>
					{recipe.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{recipe.cookingTime} Min</span> - <span>{recipe.servings} serves</span>
					</div>
					<Link to={`/recipes/${recipe.id}`}><Button name='view recipe'/></Link> 
				</div>
			</div>
		</div>
	)
}
