
import styles from '../styles/CategoryCard.module.css';

const CategoryCard = ({ imagem, texto, preco }) => {
  return (
    <div className={styles.categoryCard}>
      <img src={imagem} alt={texto} />
      <p>{texto}</p>
      <p className={styles.price}>{preco}</p>
    </div>
  );
};

export default CategoryCard;
