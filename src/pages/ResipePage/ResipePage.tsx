import { Recipes } from "../../components/Recipes/Recipes";
import { useRecipes } from "../../hooks/useRecipes";


export const ResipePage = () => {
	const {recipes, isLoading} = useRecipes();

	console.log(recipes)
	console.log(isLoading)
	// console.log(isLoading)
	// console.log('render')
	return (
		<Recipes recipes={recipes}/>
	)
}
