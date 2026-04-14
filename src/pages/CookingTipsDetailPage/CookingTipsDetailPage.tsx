import { useParams } from "react-router";

export const CookingTipsDetailPage = () => {
	const { id } = useParams();
	return (
		<div>CookingTipsDetailPage {id}</div>
	)
}
