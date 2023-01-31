import Btn_next_page from '../../components/Btn_next_page';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Mas_personal from '../../components/Mas_personal';
import NavBar from '../../components/NavBar';
import Resientes from '../../components/Resientes';
import Sugerencias from '../Sugerencias';

const HomePega = () => {
  return (
    <div className=" bg-[]">
      <NavBar />
      <Header />
      {/* <Btn_next /> */}
      <Btn_next_page />
      <h1 className=" font-bold text-xl relative left-24 top-16">
        Populares en Querétaro
      </h1>
      <p className="relative left-24 text-neutral-500 top-16">
        Lo que las personas piden más
      </p>
      <Cart />
      <Sugerencias />
      <Mas_personal />
      <Resientes />
      {/* <Components /> */}
      <Footer />;
    </div>
  );
};

export default HomePega;
