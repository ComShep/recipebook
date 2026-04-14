import { useParams } from "react-router"
import { useDetail } from "../../hooks/useDetail";
import styles from './RecipeDetailPage.module.css'
import { Tag } from "../../components/assets/tag/Tag";
import { IconBreakfest, IconClock, IconDessert, IconDinner, IconLunch, IconServes } from "../../components/assets/icons/Icons";
import { ItemsList } from "../../components/assets/itemsList/ItemsList";


export const RecipeDetailPage = () => {
	const { id } = useParams();
	const { detail, isLoadingDetail } = useDetail(id, 'recipes');

	if (isLoadingDetail) {
		return (
			<div>Loading</div>
		)
	}

		if (detail === null) {
		return (
			<div>Recipe not found</div>
		)
	}
	
	const categoryIcon = (category: string) => {
		switch (category) {
			case 'breakfast': return <IconBreakfest/>;
			case 'lunch': return <IconLunch/>;
			case 'dinner': return <IconDinner/>;
			case 'dessert': return <IconDessert/>;
			default: return <IconServes />;
		}
	}

	return (
		<div className={styles.wrapper}>
			<section className={styles.overview}>
				<Tag title="recipe" />
				<h1 className={styles.overviewTitle}>{detail.title}</h1>
				<p className={styles.description}>{detail.description}</p>
				<div className={styles.stats}>
					<div className={styles.statsItem}><IconClock /><span>{detail.cookingTime} min</span></div>
					<div className={styles.statsItem}><IconServes /><span>{detail.servings} serves</span></div>
					<div className={styles.statsItem}>{categoryIcon(detail.category)}<span>{detail.category}</span></div>
				</div>
				<img src={detail.image} alt="img" />
			</section>
			<section className={styles.recipeInfo}>
				<div className={styles.instruction}>
					<h2 className={styles.instructionTitle}>Instructions</h2>
					<p className={styles.instructionText}>{detail.instructions}</p>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.rightSideItem}>
						<ItemsList items={detail.ingredients} title='Ingredients'/>
					</div>
					<div className={styles.rightSideItem}>
						<ItemsList items={detail.equipment} title='Equipment Needed for Preparation'/>
					</div>
					<div className={styles.rightSideItem}>
						<h3 className={styles.itemTitle}>Nutritional Value</h3>
						<ul className={styles.nutritionalList}>
							<li className={styles.nutritionalItem}>Calories: <span>{detail.nutritional.calories}</span></li>
							<li className={styles.nutritionalItem}>Protein: <span>{detail.nutritional.protein}</span></li>
							<li className={styles.nutritionalItem}>Total Fat: <span>{detail.nutritional.total_fat}</span></li>
							<li className={styles.nutritionalItem}>Carbohydrates: <span>{detail.nutritional.carbohydrates}</span></li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}
