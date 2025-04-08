import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerContent}>
                Not commercial project for portfolio
            </p>
            <p className={styles.footerContent}>
                Serhii Zadorozjnii {new Date().getFullYear()}
            </p>
        </div>
    );
};

export default Footer;
