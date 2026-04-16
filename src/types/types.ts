export interface MainResponse {
	favorite: RecipesSectionResponse,
	recipes: RecipesSectionResponse
}

export interface CookingTipsResponse {
	mastering: CookingTipsSectionResponse,
	nourishing: CookingTipsSectionResponse,
	tips_and_tricks: CookingTipsSectionResponse
}

export interface RecipesSectionResponse {
	[key: string]: RecipeDetailResponse
}

export interface CookingTipsSectionResponse {
	[key: string]: CookingTipsDetailResponse
}

export interface RecipeDetailResponse {
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

export interface CookingTipsDetailResponse {
	date: string,
	description: string,
	equipment: Array<string>,
	image: string,
	instructions: string,
	time: number,
	title: string
}

export interface CookingTipsDetail extends CookingTipsDetailResponse {
	id: string
}

export interface Recipe extends RecipeDetailResponse {
	id: string
}

export interface Main {
	favorite: Array<Recipe>,
	recipes: Array<Recipe>
}

export interface CoockingTips {
	mastering: Array<CookingTipsDetail>,
	nourishing: Array<CookingTipsDetail>,
	tips_and_tricks: Array<CookingTipsDetail>
}

export type DetailType = Recipe | CookingTipsDetail;

export type SubSectionType = 'mastering' | 'nourishing' | 'tips_and_tricks'

export interface RecipeBookContextType {
	main: Main | null,
	recipes: Array<Recipe> | null,
	detail: DetailType | null,
	cookingTips: CoockingTips | null,
	subSection: SubSectionType | null,

	setMain: (main: Main | null) => void,
	setRecipes: (recipes: Array<Recipe> | null) => void,
	setDetail: (detail: DetailType | null) => void,
	setCookingTips: (cookingTips: CoockingTips | null) => void,
	setSubSection: (subSection: SubSectionType | null) => void

	isLoadingMain: boolean,
	isLoading: boolean,
	isLoadingDetail: boolean,
	isLoadingCookingTips: boolean,

	setIsloadingMain: (loading: boolean) => void,
	setIsLoading: (loading: boolean) => void,
	setIsLoadingDetail: (loading: boolean) => void
	setIsLoadingCookingTips: (loading: boolean) => void
}

interface Nutritional {
	calories: number,
	carbohydrates: string,
	protein: string,
	total_fat: string,
}

