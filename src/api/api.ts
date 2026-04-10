const baseUrl = "https://vue-with-http-6c4e8-default-rtdb.europe-west1.firebasedatabase.app/recipes-book/";

export const getRecipeDetail = async <T>(id: string): Promise<T> => {
	const response = await fetch(`${baseUrl}recipes/${id}.json`);

	const data = await response.json();

	return data as T;
}

export const getFetchData = async <T>(url: string): Promise<T> => {
	const response = await fetch(`${baseUrl}${url}.json`);

	const data = await response.json();
	return data as T;
}