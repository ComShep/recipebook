import { useParams } from "react-router";
import styles from './CookingTipsDetailPage.module.css'
import { useDetail } from "../../hooks/useDetail";
import { DetailPageOverwiew } from "../../components/DetailPage/DetailPageOverwiew/DetailPageOverwiew";
import { useRecipeBookContext } from "../../context/RecipeContext";

export const CookingTipsDetailPage = () => {
	const { id } = useParams();
	const {subSection} = useRecipeBookContext();
	const { detail, isLoadingDetail } = useDetail(id, 'cooking_tips', subSection)
	
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

	return (
		<div className={styles.wrapper}>
			<DetailPageOverwiew
				tagTitle="cooking tips"
				title={detail.title}
				description={detail.description}
				image={detail.image}
				isRenderStats={false}
			/>
			{/* <section className={styles.info}>
				<div className={styles.instruction}>
					<h2 className={styles.instructionTitle}>Instructions</h2>
					<p className={styles.instructionText}>{detail.instructions}</p>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.rightSideItem}>
						<ItemsList items={detail.ingredients} title='Ingredients' />
					</div>
					<div className={styles.rightSideItem}>
						<ItemsList items={detail.equipment} title='Equipment Needed for Preparation' />
					</div>
				</div>
			</section> */}
		</div>
	)
}
