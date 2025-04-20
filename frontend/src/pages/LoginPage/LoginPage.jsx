import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage = ({ mode }) => {
    const navigate = useNavigate();
    const isLogin = mode === "login";

    const handleSwitch = () => {
        navigate(isLogin ? "/register" : "/login");
    };

    return (
        <div className={styles.loginPageContainer}>
            {isLogin ? <LoginForm /> : <RegisterForm />}
            <button onClick={handleSwitch}>
                {isLogin ? "Create Account " : "Already have account?"}
            </button>
        </div>
    );
};

export default LoginPage;
