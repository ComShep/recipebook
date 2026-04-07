import { createContext, useContext, useState, type ReactNode } from "react";
import type { Resipe } from "../types/types";

type RecipeBookContextType = {
	recipes: Array<Resipe> | null,
	setRecipes: (recipes: Array<Resipe> | null) => void,
	isLoading: boolean,
	setIsLoading: (loading: boolean) => void
}

const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined);

export const RecipeBookProvider = ({ children }: { children: ReactNode }) => {
	const [recipes, setRecipes] = useState<Array<Resipe> | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);


	const returnValue = {
		recipes,
		setRecipes,
		isLoading,
		setIsLoading
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