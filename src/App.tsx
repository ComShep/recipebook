import { HashRouter, Route, Routes } from "react-router"
import { RecipeBookProvider } from "./context/RecipeContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { HomePage } from "./pages/HomePage/HomePage"
import { RecipePage } from "./pages/RecipePage/RecipePage"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { RecipeDetailPage } from "./pages/RecipeDetailPage/RecipeDetailPage"

export const App = () => {
	return (
		<HashRouter>
			<RecipeBookProvider>
				<main className="wrapper">
					<Header />
					<div className="content">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/recipes" element={<RecipePage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/recipes/:id" element={<RecipeDetailPage />} />
						</Routes>
					</div>
					<Footer />
				</main>
			</RecipeBookProvider>
		</HashRouter>
	)
}
