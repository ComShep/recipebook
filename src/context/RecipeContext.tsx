import { createContext, useContext, type ReactNode } from "react";
import { useRecipeManager } from "../hooks/useRecipeManager";
import type { Resipe } from "../types/types";

type RecipeBookContextType = {
	recipes: Array<Resipe> | null,
	isLoading: boolean
}

const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined);

export const RecipeBookProvider = ({children}: {children: ReactNode}) => {
	const contextManager = useRecipeManager();

	return (
		<RecipeBookContext.Provider value={contextManager}>
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