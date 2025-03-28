import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main style={{ backgroundColor: "gray", minHeight: "100vh" }}>
                    <AppRouter />
                </main>
            </div>
        </Router>
    );
}

export default App;
