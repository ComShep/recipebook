import { Recipes } from "../../components/Recipes/Recipes";
import { useRecipes } from "../../hooks/useRecipes";


export const RecipePage = () => {
	const {recipes, isLoading} = useRecipes();

	if (isLoading) {
		return (
			<div>Loading...</div>
		)
	}

	return (
		<Recipes recipes={recipes}/>
	)
}
