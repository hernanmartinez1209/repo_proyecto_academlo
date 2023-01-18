import 'tailwindcss/tailwind.css';
import Btn_next from '../components/Btn_next';
import Btn_next_page from '../components/Btn_next_page';
import Cart from '../components/Cart';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/globals.css';
// import LoginPage from './login/page';
// import LoginPage from './login/login';
export default function App() {
  return (
    <div className="app h-auto">
      {/* <Component {...pageProps} /> */}

      <NavBar />
      <Header />
      <Btn_next />
      <Btn_next_page />
      <Cart />

      {/* <LoginPage /> */}

      {/* <LoginPage /> */}
    </div>
  );
}
