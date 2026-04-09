import { AboutUs } from "../../components/HomePage/AboutUs/AboutUs"
import { Banner } from "../../components/HomePage/Banner/Banner"
import { Explore } from "../../components/HomePage/Explore/Explore"
import { Recipes } from "../../components/Recipes/Recipes"
import { Slider } from "../../components/Slider/Slider"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { useMain } from "../../hooks/useMain"

export const HomePage = () => {
	const {main, isLoadingMain} = useMain();

	console.log(main)

	if (isLoadingMain) {
		return (
			<div>Загрузка</div>
		)
	}

	if (main === null) {
		return (
			<div>Страница не загружена</div>
		)
	}

	return (
		<>
			<Banner/>
			<Explore/>
			<Slider recipes={main.favorite}/>
			<Recipes recipes={main.recipes}/>
			<AboutUs/>
			<Subscribe/>
		</>
	)
}
