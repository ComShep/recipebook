import { useLocation } from "react-router"
import { SEO } from "./SEO"


export const AppSEO = () => {
	const location = useLocation();
	const path = location.pathname;
	const DEFAULT_OG_IMAGE = 'https://comshep.github.io/recipebook/images/banner/banner.png'

	if (path.includes('/recipes/') || path.includes('/cooking-tips/')) {
		return null;
	}

	const seoConfig: Record<string, { title: string; description: string, image: string }> = {
		'/': {
			title: 'Home',
			description: 'Discover delicious recipes for every occasion. Easy to follow recipes with step-by-step instructions.',
			image: DEFAULT_OG_IMAGE,
		},
		'/recipes': {
			title: 'All Recipes',
			description: 'Browse our collection of delicious recipes. From breakfast to dessert, find your next favorite dish.',
			image: DEFAULT_OG_IMAGE,
		},
		'/about': {
			title: 'About Us',
			description: 'Learn more about Recipe Book, our mission, and the team behind your favorite recipes.',
			image: DEFAULT_OG_IMAGE,
		},
		'/cooking-tips': {
			title: 'Cooking Tips',
			description: 'Master the art of cooking with our expert tips, techniques, and kitchen hacks.',
			image: DEFAULT_OG_IMAGE,
		},
	};

	const config = seoConfig[path] || {
		title: 'Recipe Book',
		description: 'Discover delicious recipes for every occasion',
	}
	return <SEO {...config} />
}
