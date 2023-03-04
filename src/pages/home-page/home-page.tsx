import { Footer, Home, Navbar } from 'src/components';
import styles from './home-page.module.css';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
