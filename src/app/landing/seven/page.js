import Image from 'next/image';
import styles from './Page7.module.css';

const NikeLimitedEdition = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.part1}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8h1DGv8C-ssndRvdOxPsBUz2dBFcOcRzHA6SnkpDwQ&s"
            alt="Logo"
            width={100}
            height={100}
          />
          <h4>Home</h4>
          <h4>Men</h4>
          <h4>Women</h4>
          <h4>Collection</h4>
          <h4>Content</h4>
        </div>
        <div className={styles.part2}>
          <i className="ri-search-line"></i>
          <i className="ri-shopping-cart-2-line"></i>
          <i className="ri-menu-3-line"></i>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <h5>Explore the Limited Edition</h5>
          <h1>Nike Limited Edition</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <button>Shop now</button>
        </div>
        <div className={styles.right}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={styles.element}>
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/61012d23-cbb9-42d6-871d-bc634201f0aa/air-jordan-1-mid-shoes-SQf7DM.png"
                alt="Men's Basketball Shoes"
                width={380}
                height={380}
              />
              <h4>Men's Basketball Shoes</h4>
              <h5>LeBron Soldier 12(Team)</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NikeLimitedEdition;
