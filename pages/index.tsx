// import { Inter } from '@next/font/google';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

import Btn_next from '../components/Btn_next';
import Btn_next_page from '../components/Btn_next_page';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Btn_next />
      <Btn_next_page />
      <h1 className=" font-bold text-xl relative left-52">
        Populares en Querétaro
      </h1>
      <p className="relative left-56 text-neutral-500">
        Lo que las personas piden más
      </p>
      <Cart />

      <br />
      <br />
      {/* <Components /> */}
      <Footer />
    </>
  );
}
