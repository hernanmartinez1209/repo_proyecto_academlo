import 'tailwindcss/tailwind.css';
// import { Login } from '../components/Login';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import '../styles/globals.css';
export default function App() {
  return (
    <div className="app">
      {/* <Component {...pageProps} /> */}
      {/* <NavBar /> */}
      {/* <Login /> */}

      <NavBar />
      <Header />
    </div>
  );
}
