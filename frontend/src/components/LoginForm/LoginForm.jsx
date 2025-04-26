import { useForm } from "react-hook-form";
import { fetchLogin } from "../../store/authSlice";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(() => console.log(watch()))}>
                <div className={styles.formItem}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="email"
                        {...register("password")}
                        placeholder="Password"
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
