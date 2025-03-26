import {} from "react";

import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <div className="app-container">
            {/*   <Header /> */}
            <main>
                <AppRouter />
            </main>
        </div>
    );
}

export default App;
