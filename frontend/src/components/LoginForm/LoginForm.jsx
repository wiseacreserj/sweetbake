import { useForm } from "react-hook-form";

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
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="email"
                    {...register("password")}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
