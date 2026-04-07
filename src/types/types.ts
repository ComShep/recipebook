export type Recipe = {
	id: string,
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

export type ResipesResponce = {
	[key: string]: ResipeDetailResponce
}

export type ResipeDetailResponce = {
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

type Nutritional = {
	calories: number,
	carbohydrates: string,
	protein: string,
	total_fat: string,
}

