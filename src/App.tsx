import { BrowserRouter, Route, Routes } from "react-router"
import { RecipeBookProvider } from "./context/RecipeContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { HomePage } from "./pages/HomePage/HomePage"
import { ResipePage } from "./pages/ResipePage/ResipePage"

export const App = () => {

	return (
		<BrowserRouter>
			<RecipeBookProvider>
				<Header/>
				<Routes>
					<Route path="/recipebook" element={<HomePage/>}/>
					<Route path="recipebook/recipe" element={<ResipePage/>}/>
				</Routes>
				<Footer/>
			</RecipeBookProvider>
		</BrowserRouter>
	)
}
