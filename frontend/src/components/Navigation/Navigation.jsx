import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav>
            <Link to="/" className={styles.nav_link}>
                Home
            </Link>
            <Link to="/catalog" className={styles.nav_link}>
                Catalog
            </Link>
            <Link to="/login" className={styles.nav_link}>
                Login
            </Link>
        </nav>
    );
};

export default Navigation;
