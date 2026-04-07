import { useParams } from "react-router"


export const RecipeDetailPage = () => {
	const { id } = useParams();

	return (
		<div>Recipe Id: {id}</div>
	)
}
