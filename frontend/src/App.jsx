import {} from "react";

import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchLogin, fetchLogout } from "./store/authSlice";

function App() {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(status);
    return (
        <>
            Main page
            <button onClick={() => console.log(status)}>Click</button>
            <button
                onClick={() =>
                    dispatch(
                        fetchLogin({ email: "admin@a.com", password: "admin" })
                    )
                }
            >
                Login
            </button>
            <button onClick={() => dispatch(fetchLogout())}>Logout</button>
        </>
    );
}

export default App;
