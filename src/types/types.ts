export interface MainResponce {
	favorite: RecipesResponce,
	recipes: RecipesResponce
}

export interface RecipesResponce {
	[key: string]: RecipeDetailResponce
}

export interface RecipeDetailResponce {
	category: string,
	cookingTime: number,
	description: string,
	equipment: Array<string>,
	image: string,
	ingredients: Array<string>,
	instructions: string,
	nutritional: Nutritional,
	servings: number,
	title: string
}

export interface Recipe extends RecipeDetailResponce {
	id: string
}

export interface Main {
	favorite: Array<Recipe>,
	recipes: Array<Recipe>
}

export interface RecipeBookContextType {
	main: Main | null,
	recipes: Array<Recipe> | null,
	recipeDetail: Recipe | null,
	setMain: (main: Main | null) => void,
	setRecipes: (recipes: Array<Recipe> | null) => void,
	setRecipeDetail: (recipe: Recipe | null) => void,
	isLoadingMain: boolean,
	isLoading: boolean,
	isLoadingDetail: boolean,
	setIsloadingMain: (loading: boolean) => void,
	setIsLoading: (loading: boolean) => void,
	setIsLoadingDetail: (loading: boolean) => void
}



interface Nutritional {
	calories: number,
	carbohydrates: string,
	protein: string,
	total_fat: string,
}

