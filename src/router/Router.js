import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import ProductPage from "../pages/ProductPage";

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element ={<HomePage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/error" element={<ErrorPage/>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}