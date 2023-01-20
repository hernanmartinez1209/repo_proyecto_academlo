import Artistas_Conciertos from './Artistas_Conciertos';
import Btn_next from './Btn_next';
import Btn_next_page from './Btn_next_page';
import Cart from './Cart';
import Marcas_Tiendas from './Marcas_Tiendas';
import Serch from './Serch';
import Torneos from './Torneos';

export const Components = () => {
  return (
    <ul>
      components
      <li>
        butto next page
        <Btn_next_page />
      </li>
      <li>
        Btn next
        <Btn_next />
      </li>
      <li>
        artistas y consiertos
        <Artistas_Conciertos />
      </li>
      <li>
        marcas y tiendas
        <Marcas_Tiendas />
      </li>
      <li>
        torneos
        <Torneos />
      </li>
      <h1>serch</h1>
      <li className="  flex justify-center items-center relative right-96 top-24">
        <Serch />
      </li>
      <li>
        cart component
        <Cart />
      </li>
    </ul>
  );
};
