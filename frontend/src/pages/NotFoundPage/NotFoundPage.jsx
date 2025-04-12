import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundContent}>
                <p>
                    Page <br /> <span>not found</span>
                </p>
                <Link to="/" className={styles.homeLink}>
                    Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
