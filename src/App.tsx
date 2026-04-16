import { HashRouter, Route, Routes } from "react-router"
import { RecipeBookProvider } from "./context/RecipeContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { HomePage } from "./pages/HomePage/HomePage"
import { RecipePage } from "./pages/RecipePage/RecipePage"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { RecipeDetailPage } from "./pages/RecipeDetailPage/RecipeDetailPage"
import { CookingTipsPage } from "./pages/CookingTipsPage/CookingTipsPage"
import { ScrollToTop } from "./components/utils/ScrollToTop"
import { CookingTipsDetailPage } from "./pages/CookingTipsDetailPage/CookingTipsDetailPage"

export const App = () => {
	return (
		<HashRouter>
			<ScrollToTop />
			<RecipeBookProvider>
				<main className="wrapper">
					<Header />
					<div className="content">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/recipes" element={<RecipePage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/recipes/:id" element={<RecipeDetailPage />} />
							<Route path="/cooking-tips" element={<CookingTipsPage />} />
							<Route path="/cooking-tips/:subSection/:id" element={<CookingTipsDetailPage />} />
						</Routes>
					</div>
					<Footer />
				</main>
			</RecipeBookProvider>
		</HashRouter>
	)
}
