import { AboutUs } from "../../components/HomePage/AboutUs/AboutUs"
import { Banner } from "../../components/HomePage/Banner/Banner"
import { Explore } from "../../components/HomePage/Explore/Explore"
// import { Recipes } from "../../components/Recipes/Recipes"
// import { Favorite } from "../../components/Slider/Favorite"
import { Subscribe } from "../../components/Subscribe/Subscribe"

export const HomePage = () => {
	return (
		<>
			<Banner/>
			<Explore/>
			{/* <Favorite/> */}
			{/* <Recipes/> */}
			<AboutUs/>
			<Subscribe/>
		</>
	)
}
