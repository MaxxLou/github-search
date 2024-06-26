import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"
import Navigation from "./components/Navigation"

export default function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  )
}

