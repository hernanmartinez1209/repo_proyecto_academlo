import Cart from '../../components/Cart';
import Mis_publicaciones from '../../components/Mis_publicaciones';
import Mis_votos from '../../components/Mis_votos';
import NavBar from '../../components/NavBar';

const PerfilPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full colorBluegb h-36">
        <picture className="w-full flex justify-center absolute top-40 ">
          <img className="rounded-full" src="../foto_perfil.jpg " alt="" />
        </picture>
      </div>
      <div className=" flex justify-center h-96 gap-32 items-center">
        <Mis_publicaciones />
        <Mis_votos />
      </div>
      <Cart />
      <picture>
        <img className="w-full h-52" src="../footer.png" alt="" />
      </picture>
    </div>
  );
};

export default PerfilPage;
