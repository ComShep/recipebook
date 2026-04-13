import { AboutUs } from "../../components/HomePage/AboutUs/AboutUs"
import { Banner } from "../../components/HomePage/Banner/Banner"
import { Explore } from "../../components/HomePage/Explore/Explore"
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"
import { Recipes } from "../../components/Recipes/Recipes"
import { Slider } from "../../components/Slider/Slider"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { useMain } from "../../hooks/useMain"


export const HomePage = () => {
	const {main, isLoadingMain} = useMain();

	if (isLoadingMain) {
		return (
			<div>Loading...</div>
		)
	}

	if (main === null) {
		return (
			<div>Page not found</div>
		)
	}

	return (
		<>
			<Banner/>
			<Explore/>
			<Slider 
				slidesInfo={main.favorite} 
				sliderTitle='featured recipes'
				renderCard={(recipe) => {
					return <RecipeCard cardInfo={recipe}/>
				}}
			/>
			<Recipes recipes={main.recipes}/>
			<AboutUs/>
			<Subscribe/>
		</>
	)
}
