
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const CATEGORIAS = [
  { id: 1, imagem: '/assets/img/chopp.webp', texto: 'Chopp', preco: 'R$ 10,00' },
  { id: 2, imagem: '/assets/img/vinho.webp', texto: 'Vinho', preco: 'R$ 20,00' },
  { id: 3, imagem: 'assets/img/cerveja.webp', texto: 'Cerveja', preco: 'R$ 5,00' },
  // Adicione mais categorias se necessário
];

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div className={styles.categories}>
        {CATEGORIAS.map(categoria => (
          <CategoryCard key={categoria.id} {...categoria} />
        ))}
      </div>
    </div>
  );
};

export default Home;
