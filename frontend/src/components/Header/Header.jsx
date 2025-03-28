import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header_container}>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
