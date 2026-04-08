import { useParams } from "react-router"
import { useRecipeDetail } from "../../hooks/useRecipeDetail";


export const RecipeDetailPage = () => {
	const { id } = useParams();
	const {recipeDetail, isLoadingDetail} = useRecipeDetail(id);

	console.log(recipeDetail)
	console.log(isLoadingDetail)

	return (
		<div>Recipe Id: {id}</div>
	)
}
