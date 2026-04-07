import { useRecipes } from "../../hooks/useRecipes";


export const ResipePage = () => {
	const {recipes, isLoading} = useRecipes();

	console.log(recipes)
	console.log(isLoading)
	// console.log(isLoading)
	// console.log('render')
	return (
		<div>ResipePage</div>
	)
}
