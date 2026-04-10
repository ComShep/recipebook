import { WelcomeCoockingTips } from "../../components/CookingTipsPage/WelcomeCoockingTips"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { useCookingTips } from "../../hooks/useCookingTips"

export const CookingTipsPage = () => {
	const { cookingTips, isLoadingCookingTips } = useCookingTips();

	if (isLoadingCookingTips) {
		return (
			<div>Loading...</div>
		)
	}

	if (cookingTips === null) {
		return (
			<div>Page not found</div>
		)
	}

	console.log(cookingTips)

	return (
		<>
			<WelcomeCoockingTips />
			<Subscribe />
		</>
	)
}
