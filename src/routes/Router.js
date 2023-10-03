import { BrowserRouter, Routes, Route } from "react-router-dom"
// import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import Header from "../components/Header"
// import Info from "../pages/Info"
import SearchDogs from "../pages/SearchDogs"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route index element={<HomePage />} /> */}
                <Route index element={<SearchDogs />} />
                {/* <Route path="info" element={<Info />} /> */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}