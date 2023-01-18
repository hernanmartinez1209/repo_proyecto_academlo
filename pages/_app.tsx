import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
// // import LoginPage from './login/page';
// // import LoginPage from './login/login';
// export default function App({ pageProps }: any) {
//   return (
//     <div>
//       <Component {...pageProps} />

//       {/* <NavBar />
//       <Header />
//       <Btn_next />
//       <Btn_next_page />
//       <Cart /> */}

//       {/* <LoginPage /> */}

//       {/* <LoginPage /> */}
//     </div>
//   );
// }
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
