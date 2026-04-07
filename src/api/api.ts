import type { ResipesResponce } from "../types/types";


const url = "https://vue-with-http-6c4e8-default-rtdb.europe-west1.firebasedatabase.app/";

export const getRecipesList = async (): Promise<ResipesResponce> => {
	const response = await fetch(`${url}/recipes.json`);

	const data = await response.json();

	return data;
}