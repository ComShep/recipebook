import { useRecipeBookContext } from "../../context/RecipeContext";


export const ResipePage = () => {
	const {recipes, isLoading} = useRecipeBookContext();

	console.log(recipes)
	console.log(isLoading)
	// console.log(isLoading)
	// console.log('render')
	return (
		<div>ResipePage</div>
	)
}
