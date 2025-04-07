import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";
import bannerImg from "../../assets/images/home/home_page_banner.jpg";
import CategoryList from "../../components/CategoryList/CategoryList";

const HomePage = () => {
    return (
        <div className={styles.homePageContainer}>
            <section className={styles.bannerSection}>
                <div className={styles.banner}>
                    <img
                        src={bannerImg}
                        alt="banner"
                        className={styles.bannerImg}
                    />
                    <div className={styles.bannerInner}>
                        <div className={styles.bannerInnerContent}>
                            <h2>Order Catering for Your Next Office Event!</h2>
                            <p>
                                Treats that your colleagues and guests will be
                                sure to love.
                            </p>
                        </div>

                        <svg
                            aria-hidden="true"
                            className={styles.bannerInnerSVG}
                            viewBox="0 0 522 657"
                            fill="#e7cbef"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M532 76.4861C532 71.582 528.122 67.4877 523.207 67.3077C425.131 63.6634 365.519 0 266 0C166.481 0 106.869 63.6634 8.7928 67.3077C3.87773 67.4877 0 71.582 0 76.4861V560.103C0 563.477 1.89368 566.537 4.86978 568.202C28.7237 581.609 47.8879 602.08 59.2512 626.691C60.7843 629.975 64.1663 632 67.7737 632H464.226C467.833 632 471.26 629.975 472.749 626.691C484.112 602.08 503.231 581.609 527.13 568.202C530.106 566.537 532 563.477 532 560.103V76.4861V76.4861Z"></path>{" "}
                        </svg>
                    </div>
                </div>
            </section>
            <section className={styles.productsSection}>
                <div className={styles.productsSectionContent}>
                    <div className={styles.productsTextContent}>
                        <h3>Our Products</h3>
                        <p>
                            For more than 15 years, SweetBake has been making
                            your favorite baked goods the old-fashioned way:
                            from scratch, in small batches, and using the finest
                            ingredients.
                        </p>
                        <Link to="/catalog" className={styles.viewMoreLink}>
                            view more
                        </Link>
                    </div>
                    <CategoryList />
                </div>
            </section>
            <section>Section</section>
        </div>
    );
};

export default HomePage;
