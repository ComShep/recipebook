import { WelcomeCoockingTips } from "../../components/CookingTipsPage/WelcomeCoockingTips"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { useCookingTips } from "../../hooks/useCookingTips"
import { Slider } from "../../components/Slider/Slider"
import { CookingTipsCard } from "../../CookingTipsCard/CookingTipsCard"


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
			<Slider
				sliderTitle="Mastering the Basics"
				slidesInfo={cookingTips.mastering}
				renderCard={(recipe) => {
					return <CookingTipsCard cardInfo={recipe} />
				}}
				rows={2}
				perView={3}
				border={false}
			/>
			<Slider
				sliderTitle="Nourishing Every Palate"
				slidesInfo={cookingTips.nourishing}
				renderCard={(recipe) => {
					return <CookingTipsCard cardInfo={recipe} />
				}}
				perView={3}
				backColor={true}
			/>
			<Slider
				sliderTitle="TIps & tricks"
				slidesInfo={cookingTips.tips_and_tricks}
				renderCard={(recipe) => {
					return <CookingTipsCard cardInfo={recipe} />
				}}
				rows={2}
				perView={3}
				border={false}
			/>
			<Subscribe />
		</>
	)
}
