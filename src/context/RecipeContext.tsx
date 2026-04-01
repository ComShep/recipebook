import { createContext, useContext, type ReactNode } from "react";

type RecipeBookContextType = {

}

const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined);

export const RecipeBookProvider = ({children}: {children: ReactNode}) => {
	const contextManager = {};

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