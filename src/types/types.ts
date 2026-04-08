export interface ResipesResponce {
	[key: string]: ResipeDetailResponce
}

export interface ResipeDetailResponce {
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

export interface Recipe extends ResipeDetailResponce {
	id: string
}

interface Nutritional {
	calories: number,
	carbohydrates: string,
	protein: string,
	total_fat: string,
}

