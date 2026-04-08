import { createContext, useContext, useState, type ReactNode } from "react";
import type { Recipe } from "../types/types";

type RecipeBookContextType = {
	recipes: Array<Recipe> | null,
	recipeDetail: Recipe | null,
	setRecipes: (recipes: Array<Recipe> | null) => void,
	setRecipeDetail: (recipe: Recipe | null) => void,
	isLoading: boolean,
	isLoadingDetail: boolean,
	setIsLoading: (loading: boolean) => void,
	setIsLoadingDetail: (loading: boolean) => void
}

const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined);

export const RecipeBookProvider = ({ children }: { children: ReactNode }) => {
	const [recipes, setRecipes] = useState<Array<Recipe> | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [recipeDetail, setRecipeDetail] = useState<Recipe | null>(null)
	const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(false);

	const returnValue = {
		recipes,
		recipeDetail,
		setRecipes,
		setRecipeDetail,
		isLoading,
		isLoadingDetail,
		setIsLoading,
		setIsLoadingDetail
	}

	return (
		<RecipeBookContext.Provider value={returnValue}>
			{children}
		</RecipeBookContext.Provider>
	)
}

export const useRecipeBookContext = () => {
	const context = useContext(RecipeBookContext);

	if (context === undefined) {
		throw new Error('Ошибка контекста')
	}

	return context;
}