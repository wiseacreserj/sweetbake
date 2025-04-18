import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRouter = () => {
    return (
        /*  <Router> */
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage mode="login" />} />
            <Route path="/register" element={<LoginPage mode="register" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        /*   </Router> */
    );
};

export default AppRouter;
