import { Link } from 'react-router-dom';
import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.pContainer}>
        Hellow user1 But I don`t know what you can do here
      </h1>
      <Link className={styles.btnContainer} to="/tweets">
        Go!
      </Link>
    </div>
  );
};

export default HomePage;
