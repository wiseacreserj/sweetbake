import CategoryListItem from "../CategoryListItem/CategoryListItem";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
    const data = [
        {
            categoryName: "Breads",
            imageUrl: "/src/assets/images/home/breeds_category.jpg",
        },
        {
            categoryName: "Snacks",
            imageUrl: "/src/assets/images/home/snacks_category.jpeg",
        },
        {
            categoryName: "Savory Pies",
            imageUrl: "/src/assets/images/home/savory_pies_category.jpg",
        },
        {
            categoryName: "Pastries",
            imageUrl: "/src/assets/images/home/pastries_category.jpg",
        },
        {
            categoryName: "Desserts",
            imageUrl: "/src/assets/images/home/desserts_category.jpg",
        },
        {
            categoryName: "Drinks",
            imageUrl: "/src/assets/images/home/drinks_category.jpg",
        },
    ];
    return (
        <div className={styles.container}>
            {" "}
            {data.map((item, index) => {
                return (
                    <CategoryListItem
                        category={item.categoryName}
                        imageUrl={item.imageUrl}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default CategoryList;
