import { AboutUs } from "../../components/AboutUs/AboutUs"
import { Banner } from "../../components/Banner/Banner"
import { Explore } from "../../components/Explore/Explore"
import { Recipes } from "../../components/Recipes/Recipes"
import { Favorite } from "../../components/Slider/Favorite"

export const HomePage = () => {
	return (
		<>
			<Banner/>
			<Explore/>
			<Favorite/>
			<Recipes/>
			<AboutUs/>
		</>
	)
}
