import Btn_next_page from '../../components/Btn_next_page';
import Cart from '../../components/Cart';
import Mas_personal from '../../components/Mas_personal';
import Resientes from '../../components/Resientes';
import Layout from '../layout';
import Sugerencias from '../Sugerencias';

const HomePega = () => {
  return (
    <Layout>
      <div>
        {/* <Btn_next /> */}
        <div className=" w-full flex flex-row-reverse relative top-96">
          <Btn_next_page />
        </div>
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
      </div>
    </Layout>
  );
};

export default HomePega;
