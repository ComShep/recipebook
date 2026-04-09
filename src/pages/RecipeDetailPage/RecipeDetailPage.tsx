import { useParams } from "react-router"
import { useRecipeDetail } from "../../hooks/useRecipeDetail";
import styles from './RecipeDetailPage.module.css'
import { Tag } from "../../components/assets/tag/Tag";
import { IconClock, IconServes } from "../../components/assets/icons/Icons";


export const RecipeDetailPage = () => {
	const { id } = useParams();
	const { recipeDetail, isLoadingDetail } = useRecipeDetail(id);

	console.log(recipeDetail)
	console.log(isLoadingDetail)

	if (isLoadingDetail) {
		return (
			<div>Загрузка</div>
		)
	}

	return (
		<div className={styles.wrapper}>
			<section className={styles.overview}>
				<Tag title="recipe" />
				<h1 className={styles.overviewTitle}>{recipeDetail?.title}</h1>
				<p className={styles.description}>{recipeDetail?.description}</p>
				<div className={styles.stats}>
					<div className={styles.statsItem}><IconClock /><span>{recipeDetail?.cookingTime} min</span></div>
					<div className={styles.statsItem}><IconServes /><span>{recipeDetail?.servings} serves</span></div>
				</div>
				<img src={recipeDetail?.image} alt="img" />
			</section>
			<section className={styles.recipeInfo}>
				<div className={styles.instruction}>
					<h2 className={styles.instructionTitle}>Instructions</h2>
					<p className={styles.instructionText}>{recipeDetail?.instructions}</p>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.rightSideItem}>
						<h3 className={styles.itemTitle}>Ingredients</h3>
						<ul className={styles.list}>
							{recipeDetail?.ingredients.map(ingedient => {
								return <li className={styles.item}>{ingedient}</li>
							})}
						</ul>
					</div>
					<div className={styles.rightSideItem}>
						<h3 className={styles.itemTitle}>Equipment Needed for Preparation</h3>
						<ul className={styles.list}>
							{recipeDetail?.equipment.map(equipment => {
								return <li className={styles.item}>{equipment}</li>
							})}
						</ul>
					</div>
					<div className={styles.rightSideItem}>
						<h3 className={styles.itemTitle}>Nutritional Value</h3>
						<ul className={styles.nutritionalList}>
							<li className={styles.nutritionalItem}>Calories: <span>{recipeDetail?.nutritional.calories}</span></li>
							<li className={styles.nutritionalItem}>Protein: <span>{recipeDetail?.nutritional.protein}</span></li>
							<li className={styles.nutritionalItem}>Total Fat: <span>{recipeDetail?.nutritional.total_fat}</span></li>
							<li className={styles.nutritionalItem}>Carbohydrates: <span>{recipeDetail?.nutritional.carbohydrates}</span></li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}
