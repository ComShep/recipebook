import { WelcomeCoockingTips } from "../../components/CookingTipsPage/WelcomeCookingTips/WelcomeCoockingTips"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { useCookingTips } from "../../hooks/useCookingTips"
import { Slider } from "../../components/Slider/Slider"
import { CookingTipsCard } from "../../components/CookingTipsPage/CookingTipsCard/CookingTipsCard"
import { CoolingTipsNourishingCard } from "../../components/CookingTipsPage/CoolingTipsNourishingCard/CoolingTipsNourishingCard"

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

	return (
		<>
			<WelcomeCoockingTips />
			<Slider
				sliderTitle="Mastering the Basics"
				slidesInfo={cookingTips.mastering}
				renderCard={(recipe) => {
					return <CookingTipsCard cardInfo={recipe} subSection='mastering'/>
				}}
				rows={2}
				perView={3}
				border={false}
			/>
			<Slider
				sliderTitle="Nourishing Every Palate"
				slidesInfo={cookingTips.nourishing}
				renderCard={(recipe) => {
					return <CoolingTipsNourishingCard cardInfo={recipe} subSection='nourishing'/>
				}}
				perView={3}
				backColor={true}
			/>
			<Slider
				sliderTitle="TIps & tricks"
				slidesInfo={cookingTips.tips_and_tricks}
				renderCard={(recipe) => {
					return <CookingTipsCard cardInfo={recipe} subSection='tips_and_tricks'/>
				}}
				rows={2}
				perView={3}
				border={false}
			/>
			<Subscribe />
		</>
	)
}
