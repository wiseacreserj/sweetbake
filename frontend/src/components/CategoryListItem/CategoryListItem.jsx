import styles from "./CategoryListItem.module.css";

const CategoryListItem = ({ category, imageUrl }) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imgContainer}>
                <img src={imageUrl} alt={category} />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.textContent}>{category}</p>
            </div>
        </div>
    );
};

export default CategoryListItem;
