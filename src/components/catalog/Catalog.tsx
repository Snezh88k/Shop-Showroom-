import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

export default function Catalog() {
  const category = [
    {
      name: "Юбки",
      img: "https://ae01.alicdn.com/kf/S07fdf8b52c40472599e729f2e052acdcy.jpg?width=800&height=800&hash=1600",
      link: `./yubki`,
    },
    {
      name: "Шапки",
      img: "https://cdn1.ozone.ru/s3/multimedia-v/6006858823.jpg",

      link: "",
    },
    {
      name: "Свитера",
      img: "",

      link: "",
    },
    {
      name: "Трусы",
      img: "https://www.terranovastyle.ru/media/catalog/product/cache/a27baa1fe94e9069785089823862ff8e/s/l/slmd50196p23-bras-cotone-tu-s105_list_1.jpg",
      link: "",
    },
    {
      name: "Платья",
      img: "https://ae04.alicdn.com/kf/Sb7bee675adb94c4e8afe20445dd90d871.jpg_640x640.jpg",
      link: `./platya`,
    },
    {
      name: "Брюки",
      img: "https://ae04.alicdn.com/kf/H8728e7d4abec4ccbb39d0bb2071bb8dc1.jpg_640x640.jpg",
      link: `./bryuki`,
    },
  ];

  return (
    <div className={styles.catalogWrapper}>
      {category.map((cat) => {
        return (
          <div key={cat.name} className={styles.categoryWrapper}>
            <Link to={cat.link}>
              <div className={styles.imgWrapper}>
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className={styles.title}>{cat.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
