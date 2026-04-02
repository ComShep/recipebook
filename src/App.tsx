import { BrowserRouter, Route, Routes } from "react-router"
import { RecipeBookProvider } from "./context/RecipeContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { HomePage } from "./pages/HomePage/HomePage"
import { ResipePage } from "./pages/ResipePage/ResipePage"
import { AboutPage } from "./pages/AboutPage/AboutPage"

export const App = () => {

	return (
		<BrowserRouter basename="/recipebook">
			<RecipeBookProvider>
				<main className="wrapper">
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/recipes" element={<ResipePage />} />
						<Route path="/about" element={<AboutPage />} />
					</Routes>
					<Footer />
				</main>
			</RecipeBookProvider>
		</BrowserRouter>
	)
}
