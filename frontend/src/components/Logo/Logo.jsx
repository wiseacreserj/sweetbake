import { Link } from "react-router-dom";
import logo from "../../assets/images/sweetbake_header_logo.png";

import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <Link to={"/"}>
            <div className={styles.logo_container}>
                <img className={styles.logo_image} src={logo} alt="logo" />
            </div>
        </Link>
    );
};

export default Logo;
