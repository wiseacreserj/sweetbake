import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className={styles.appContainer}>
                <Header />
                <main>
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
